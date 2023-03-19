class Graph {
  constructor() {
    this.adjList = {};
    this.size = 0;
  }

  addVertex(v) {
    if (!this.adjList[v]) {
      this.adjList[v] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjList[v1]) {
      this.addVertex(v1);
    }
    if (!this.adjList[v2]) {
      this.addVertex(v2);
    }

    if (!this.adjList[v1].includes(v2)) {
      this.adjList[v1].push(v2);
    }
    if (!this.adjList[v2].includes(v1)) {
      this.adjList[v2].push(v1);
    }
  }

  dfs() {
    const firstNode = Object.keys(this.adjList)[0];
    const vistedNodes = new Set([firstNode]);
    const stack = [firstNode];

    while (stack.length) {
      const currentNode = stack.pop();

      for (let i = 0; i < this.adjList[currentNode].length; i++) {
        const key = this.adjList[currentNode][i].toString();
        if (!vistedNodes.has(key)) {
          stack.push(key);
          vistedNodes.add(key);
        }
      }
      console.log(currentNode);
    }
  }

  bfs() {
    const firstNode = Object.keys(this.adjList)[0];
    const visitedNodes = new Set(firstNode);
    const queue = [firstNode];

    while (queue.length) {
      const currentNode = queue.shift();
      console.log(currentNode);

      for (let i = 0; i < this.adjList[currentNode].length; i++) {
        const key = this.adjList[currentNode][i].toString();
        if (!visitedNodes.has(key)) {
          queue.push(key);
          visitedNodes.add(key);
        }
      }
    }
  }

  showGraph() {
    console.log(this.adjList);
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

graph.showGraph();

console.log("DFS: ");
graph.dfs();
console.log("BFS: ");
graph.bfs();

module.exports = Graph;