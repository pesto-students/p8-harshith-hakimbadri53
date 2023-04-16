const Graph = require("./Graph");

function graphPathExists(adjacencyList, source, destination) {
  if (!adjacencyList[source] || !adjacencyList[destination]) {
    return false;
  }

  const firstNode = source;
  const visitedNodes = new Set([firstNode]);
  const stack = [firstNode];

  while (stack.length) {
    let currentNode = stack.pop();
    for (let i = 0; i < adjacencyList[currentNode].length; i++) {
      let key = adjacencyList[currentNode][i].toString();

      if (destination.toString() === key) {
        return true;
      }
      if (!visitedNodes.has(key)) {
        stack.push(key);
        visitedNodes.add(key);
      }
    }
  }

  return false;
}

const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

const graph = new Graph();

graph.edgeListToAdjList(edges);

let source = 0;
let destination = 2;

console.log("Adjacency List: ", graph.adjList);
console.log(
  `Result with source as ${source} and destination as ${destination} is: `,
  graphPathExists(graph.adjList, source, destination)
);
