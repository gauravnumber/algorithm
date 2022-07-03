const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // console.log(graph)
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(graph.hasOwnProperty(a))) graph[a] = [];
    if (!(graph.hasOwnProperty(b))) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "j", "m")); // => true
console.log(undirectedPath(edges, "j", "i")); // => true
console.log(undirectedPath(edges, "j", "o")); // => false
