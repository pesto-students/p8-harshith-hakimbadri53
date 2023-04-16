const Graph = require("./Graph");

const graph = new Graph();

const pathListArray = [[1, 2], [3], [3], []];

Graph.prototype.arrayAdjListToMapAdjList = function (arr) {
  for (let [index, path] of arr.entries()) {
    this.adjList[index] = path;
  }
};

graph.arrayAdjListToMapAdjList(pathListArray);

function getAllPaths(
  source,
  destination,
  adjList,
  visitedNodes = new Set(),
  currentPath = [],
  allPaths = []
) {
  visitedNodes.add(source);
  currentPath.push(source);
  if (source === destination) {
    allPaths.push([...currentPath]);
  } else {
    for (let i = 0; i < adjList[source].length; i++) {
      const key = adjList[source][i];
      if (!visitedNodes.has(key)) {
        getAllPaths(
          key,
          destination,
          adjList,
          visitedNodes,
          currentPath,
          allPaths
        );
      }
    }
  }
  visitedNodes.delete(source);
  currentPath.pop();
  return allPaths;
}

console.log(getAllPaths(0, pathListArray.length - 1, graph.adjList));
