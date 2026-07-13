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
  ) => number = calculateVoiceLeadingCost,
  voicingFilter?: (midiNotes: number[]) => boolean
): VoiceLeadingGraph {
  if (!chords.length) {
    return { nodes: [], edges: [] }
  }

  const nodes: GraphNode[] = []
  const edges: GraphEdge[] = []

  const COST_THRESHOLD = 0.0001
  const SAME_CHORD_PENALTY = 0.001

  // Candidate voicings per chord, restricted by the filter when one is
  // given (e.g. to guitar-playable voicings). If the filter would leave a
  // chord with nothing, fall back to the unfiltered set so a path always
  // exists.
  const voicingCache = new Map<
    ChordName,
    Array<{ inversion: Inversion; midiNotes: number[] }>
  >()
  const voicingsForChord = (chord: ChordName) => {
    const cached = voicingCache.get(chord)
    if (cached) return cached

    const all: Array<{ inversion: Inversion; midiNotes: number[] }> = []
    for (const inversion of triads[chord]) {
      const notes = inversion.split(' ')
      for (const midiNotes of findAllTriadsInRange(notes, midiRange)) {
        all.push({ inversion, midiNotes })
      }
    }
    const playable = voicingFilter
      ? all.filter(v => voicingFilter(v.midiNotes))
      : all
    const result = playable.length ? playable : all

    voicingCache.set(chord, result)
    return result
  }

  const lastChord = chords[chords.length - 1]
  const phantomNodes: GraphNode[] = []

  for (const { inversion, midiNotes } of voicingsForChord(lastChord)) {
    phantomNodes.push({
      position: -1, // Phantom position
      chordName: lastChord,
      inversion,
      midiNotes,
    })
  }

  // Build nodes for each position
  for (let i = 0; i < chords.length; i++) {
    const chord = chords[i]
    for (const { inversion, midiNotes } of voicingsForChord(chord)) {
      nodes.push({
        position: i,
        chordName: chord,
        inversion,
        midiNotes,
      })
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
  return calculateVoiceLeadingCostWithWeightsN(currentNotes, nextNotes, [
    voiceWeights.bass,
    voiceWeights.middle,
    voiceWeights.high,
  ])
}

export function calculateVoiceLeadingCostWithWeightsN(
  currentNotes: number[],
  nextNotes: number[],
  voiceSelections: boolean[]
): number {
  const getWeight = (isSelected: boolean) => (isSelected ? 1.0 : 0.001)
  const n = Math.min(currentNotes.length, nextNotes.length, voiceSelections.length)

  let totalCost = 0
  let activeVoices = 0
  for (let i = 0; i < n; i++) {
    if (voiceSelections[i]) activeVoices++
    totalCost += Math.abs(currentNotes[i] - nextNotes[i]) * getWeight(voiceSelections[i])
  }

  return activeVoices > 0 ? totalCost / activeVoices : totalCost
}

// Several bars of a static chord would otherwise settle into an A-B-A-B
// alternation (pairwise-optimal, but dull). For runs of the same chord
// three bars or longer, re-pick the interior voicings as a walk through
// voicings that haven't been used yet in the run: each step moves to the
// nearest unused voicing, and the final step also weighs the transition
// into the next chord so the run still exits cleanly. The run's entry
// voicing (chosen by the global optimization) is kept.
function diversifyStaticRuns(
  path: Triad[],
  nodes: GraphNode[],
  costFunction: (currentNotes: number[], nextNotes: number[]) => number
): void {
  const key = (midiNotes: number[]) => midiNotes.join(',')

  let start = 0
  while (start < path.length) {
    let end = start
    while (
      end + 1 < path.length &&
      path[end + 1].chordName === path[start].chordName
    ) {
      end++
    }

    if (end - start + 1 >= 3) {
      const used = new Set([key(path[start].midiNotes)])

      for (let i = start + 1; i <= end; i++) {
        const candidates = nodes.filter(node => node.position === i)
        const fresh = candidates.filter(c => !used.has(key(c.midiNotes)))
        // If the chord has fewer voicings than the run has bars, allow
        // reuse — but never repeat the immediately preceding voicing
        const pool = fresh.length
          ? fresh
          : candidates.filter(
              c => key(c.midiNotes) !== key(path[i - 1].midiNotes)
            )
        const options = pool.length ? pool : candidates

        const exit = i === end && i + 1 < path.length ? path[i + 1] : null
        let best = options[0]
        let bestCost = Infinity
        for (const candidate of options) {
          let cost = costFunction(path[i - 1].midiNotes, candidate.midiNotes)
          if (exit) {
            cost += costFunction(candidate.midiNotes, exit.midiNotes)
          }
          if (cost < bestCost) {
            bestCost = cost
            best = candidate
          }
        }

        path[i] = {
          chordName: best.chordName,
          inversion: best.inversion,
          midiNotes: best.midiNotes,
        }
        used.add(key(best.midiNotes))
      }
    }

    start = end + 1
  }
}

export function generateOptimalVoiceLeadingSequence(
  chords: ChordName[],
  midiRange: [number, number],
  triads: { [key: string]: Inversion[] },
  voiceWeights:
    | { bass: boolean; middle: boolean; high: boolean }
    | boolean[],
  voicingFilter?: (midiNotes: number[]) => boolean
): Triad[] {
  if (!chords.length) {
    return []
  }

  const selections = Array.isArray(voiceWeights)
    ? voiceWeights
    : [voiceWeights.bass, voiceWeights.middle, voiceWeights.high]

  const costFunction = (currentNotes: number[], nextNotes: number[]) =>
    calculateVoiceLeadingCostWithWeightsN(currentNotes, nextNotes, selections)

  const graph = buildVoiceLeadingGraph(
    chords,
    midiRange,
    triads,
    costFunction,
    voicingFilter
  )

  // Use phantom nodes as start nodes and actual end nodes
  const phantomNodes = graph.nodes.filter(node => node.position === -1)
  const endNodes = graph.nodes.filter(
    node => node.position === chords.length - 1
  )

  const path = findOptimalVoiceLeading(graph, phantomNodes, endNodes)
  if (!path.length) {
    return []
  }

  diversifyStaticRuns(path, graph.nodes, costFunction)
  return path
}
