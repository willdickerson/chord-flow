import {
  VoiceLeadingGraph,
  GraphNode,
  GraphEdge,
  Triad,
  ChordName,
  Inversion,
} from '../../common/types'
import { findAllTriadsInRange } from './chordUtils'

export function buildVoiceLeadingGraph(
  chords: ChordName[],
  midiRange: [number, number],
  triads: { [key: string]: Inversion[] },
  costFunction: (
    currentNotes: number[],
    nextNotes: number[]
  ) => number = calculateVoiceLeadingCost
): VoiceLeadingGraph {
  if (!chords.length) {
    return { nodes: [], edges: [] }
  }

  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []

  const COST_THRESHOLD = 0.0001
  const SAME_CHORD_PENALTY = 0.001

  const lastChord = chords[chords.length - 1]
  const phantomNodes: GraphNode[] = []

  for (const inversion of triads[lastChord]) {
    const notes = inversion.split(' ')
    const midiCombinations = findAllTriadsInRange(notes, midiRange)

    for (const midiNotes of midiCombinations) {
      phantomNodes.push({
        position: -1, // Phantom position
        chordName: lastChord,
        inversion,
        midiNotes,
      })
    }
  }

  // Build nodes for each position
  for (let i = 0; i < chords.length; i++) {
    const chord = chords[i]
    for (const inversion of triads[chord]) {
      const notes = inversion.split(' ')
      const midiCombinations = findAllTriadsInRange(notes, midiRange)

      for (const midiNotes of midiCombinations) {
        nodes.push({
          position: i,
          chordName: chord,
          inversion,
          midiNotes,
        })
      }
    }
  }

  // Add edges from phantom nodes to first position
  const firstNodes = nodes.filter(node => node.position === 0)
  for (const phantomNode of phantomNodes) {
    for (const firstNode of firstNodes) {
      const cost = costFunction(phantomNode.midiNotes, firstNode.midiNotes)
      edges.push({
        from: phantomNode,
        to: firstNode,
        weight: cost,
      })
    }
  }

  // Build edges between consecutive positions
  for (let i = 0; i < chords.length - 1; i++) {
    const currentNodes = nodes.filter(node => node.position === i)
    const nextNodes = nodes.filter(node => node.position === i + 1)

    for (const currentNode of currentNodes) {
      // Calculate and store all possible connections with their costs
      const possibleConnections = nextNodes.map(nextNode => ({
        node: nextNode,
        cost: costFunction(currentNode.midiNotes, nextNode.midiNotes),
      }))

      for (const conn of possibleConnections) {
        // Only add edges if there's some movement (cost > threshold)
        // and add a small penalty to prefer movement when possible
        if (conn.cost > COST_THRESHOLD) {
          edges.push({
            from: currentNode,
            to: conn.node,
            weight: conn.cost + SAME_CHORD_PENALTY,
          })
        } else {
          // If cost is near zero (same voicing), only add if there are no better options
          const hasMovementOptions = possibleConnections.some(
            other => other.cost > COST_THRESHOLD
          )
          if (!hasMovementOptions) {
            edges.push({
              from: currentNode,
              to: conn.node,
              weight: COST_THRESHOLD,
            })
          }
        }
      }

      // Safety check: ensure every node has at least one outgoing edge
      const hasOutgoingEdge = edges.some(edge => edge.from === currentNode)
      if (!hasOutgoingEdge && possibleConnections.length > 0) {
        // If no edges were added, add the lowest cost connection
        const bestConn = possibleConnections.reduce(
          (min, curr) => (curr.cost < min.cost ? curr : min),
          possibleConnections[0]
        )
        edges.push({
          from: currentNode,
          to: bestConn.node,
          weight: bestConn.cost,
        })
      }
    }
  }

  return { nodes: [...phantomNodes, ...nodes], edges }
}

function calculateVoiceLeadingCost(
  currentNotes: number[],
  nextNotes: number[]
): number {
  // Calculate total movement distance between corresponding notes
  return currentNotes.reduce(
    (sum, note, i) => sum + Math.abs(note - nextNotes[i]),
    0
  )
}

export function findOptimalVoiceLeading(
  graph: VoiceLeadingGraph,
  startNodes: GraphNode[],
  endNodes: GraphNode[]
): Triad[] {
  // Initialize data structures for Dijkstra's algorithm
  const distances = new Map<GraphNode, number>()
  const previous = new Map<GraphNode, GraphNode>()
  const visited = new Set<GraphNode>()

  // Initialize distances
  for (const node of graph.nodes) {
    distances.set(node, Infinity)
  }

  // Find phantom nodes (position -1) and use them as start nodes
  const phantomNodes = graph.nodes.filter(node => node.position === -1)
  const queue: GraphNode[] = []

  for (const phantomNode of phantomNodes) {
    distances.set(phantomNode, 0)
    queue.push(phantomNode)
  }

  for (const startNode of startNodes) {
    distances.set(startNode, 0)
    queue.push(startNode)
  }

  // Dijkstra's algorithm
  while (queue.length > 0) {
    // Find node with minimum distance
    queue.sort(
      (a, b) => (distances.get(a) || Infinity) - (distances.get(b) || Infinity)
    )
    const current = queue.shift()!

    if (visited.has(current)) continue
    visited.add(current)

    // Get outgoing edges
    const outgoingEdges = graph.edges.filter(edge => edge.from === current)

    for (const edge of outgoingEdges) {
      if (visited.has(edge.to)) continue

      const newDist = distances.get(current)! + edge.weight
      const currentDist = distances.get(edge.to)!

      if (newDist < currentDist) {
        distances.set(edge.to, newDist)
        previous.set(edge.to, current)
        queue.push(edge.to)
      }
    }
  }

  // Find best end node
  let bestEndNode: GraphNode | undefined
  let bestCost = Infinity

  for (const endNode of endNodes) {
    const cost = distances.get(endNode)!
    if (cost < bestCost) {
      bestCost = cost
      bestEndNode = endNode
    }
  }

  if (!bestEndNode || bestCost === Infinity) {
    return []
  }

  // Reconstruct path
  const path: Triad[] = []
  let current: GraphNode | undefined = bestEndNode

  while (current) {
    if (current.position >= 0) {
      // Skip phantom nodes in the output
      path.unshift({
        chordName: current.chordName,
        inversion: current.inversion,
        midiNotes: current.midiNotes,
      })
    }
    current = previous.get(current)
  }

  return path
}

export function calculateVoiceLeadingCostWithWeights(
  currentNotes: number[],
  nextNotes: number[],
  voiceWeights: { bass: boolean; middle: boolean; high: boolean }
): number {
  let totalCost = 0
  let activeVoices = 0

  const getWeight = (isSelected: boolean) => (isSelected ? 1.0 : 0.001)

  if (voiceWeights.bass) activeVoices++
  if (voiceWeights.middle) activeVoices++
  if (voiceWeights.high) activeVoices++

  totalCost +=
    Math.abs(currentNotes[0] - nextNotes[0]) * getWeight(voiceWeights.bass)
  totalCost +=
    Math.abs(currentNotes[1] - nextNotes[1]) * getWeight(voiceWeights.middle)
  totalCost +=
    Math.abs(currentNotes[2] - nextNotes[2]) * getWeight(voiceWeights.high)

  return activeVoices > 0 ? totalCost / activeVoices : totalCost
}

export function generateOptimalVoiceLeadingSequence(
  chords: ChordName[],
  midiRange: [number, number],
  triads: { [key: string]: Inversion[] },
  voiceWeights: { bass: boolean; middle: boolean; high: boolean }
): Triad[] {
  if (!chords.length) {
    return []
  }

  const costFunction = (currentNotes: number[], nextNotes: number[]) =>
    calculateVoiceLeadingCostWithWeights(currentNotes, nextNotes, voiceWeights)

  const graph = buildVoiceLeadingGraph(chords, midiRange, triads, costFunction)

  // Use phantom nodes as start nodes and actual end nodes
  const phantomNodes = graph.nodes.filter(node => node.position === -1)
  const endNodes = graph.nodes.filter(
    node => node.position === chords.length - 1
  )

  const path = findOptimalVoiceLeading(graph, phantomNodes, endNodes)
  return path.length ? path : []
}
