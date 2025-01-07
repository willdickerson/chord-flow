import {
  VoiceLeadingGraph,
  GraphNode,
  GraphEdge,
  Triad,
  ChordName,
  Inversion,
} from '../types'
import { findAllTriadsInRange } from './chordUtils'

export function buildVoiceLeadingGraph(
  chords: ChordName[],
  midiRange: [number, number],
  triads: { [key: string]: Inversion[] },
  costFunction: (currentNotes: number[], nextNotes: number[]) => number = calculateVoiceLeadingCost
): VoiceLeadingGraph {
  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []

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

  // Build edges between consecutive positions
  for (let i = 0; i < chords.length - 1; i++) {
    const currentNodes = nodes.filter(node => node.position === i)
    const nextNodes = nodes.filter(node => node.position === i + 1)

    for (const currentNode of currentNodes) {
      const possibleConnections: { node: GraphNode; cost: number }[] = []

      for (const nextNode of nextNodes) {
        const cost = costFunction(
          currentNode.midiNotes,
          nextNode.midiNotes
        )
        possibleConnections.push({ node: nextNode, cost })
      }

      // Handle same chord connections differently
      if (chords[i] === chords[i + 1]) {
        // Sort by cost
        possibleConnections.sort((a, b) => a.cost - b.cost)

        // Find the smallest non-zero cost connection
        const nonZeroConnections = possibleConnections.filter(
          conn => conn.cost > 0
        )

        if (nonZeroConnections.length > 0) {
          // Use the smallest non-zero cost connection
          const bestConn = nonZeroConnections[0]
          edges.push({
            from: currentNode,
            to: bestConn.node,
            weight: bestConn.cost,
          })
        } else {
          // If all costs are zero, use the first connection
          const bestConn = possibleConnections[0]
          edges.push({
            from: currentNode,
            to: bestConn.node,
            weight: bestConn.cost,
          })
        }
      } else {
        // For different chords, add all possible connections
        for (const conn of possibleConnections) {
          edges.push({
            from: currentNode,
            to: conn.node,
            weight: conn.cost,
          })
        }
      }
    }
  }

  return { nodes, edges }
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

  // Set start nodes' distances to 0 and add to queue
  const queue: GraphNode[] = []
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
    path.unshift({
      chordName: current.chordName,
      inversion: current.inversion,
      midiNotes: current.midiNotes,
    })
    current = previous.get(current)
  }

  return path
}
