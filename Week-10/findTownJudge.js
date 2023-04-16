/* 
Thought Process - the number of incoming edges for town judge should be n-1 (n is the number of vertices)
and outgoing edges shall be zero,

so we create 1 map each for outgoing and incoming edges, and then iterate over vertices to check if a vertex exists that:
have n-1 incoming edges and 0 outgoing edges
if we founc such a vertex we return that vertex else return -1
*/
const n = 5;

const trustArray = [
  [1, 3],
  [2, 3],
  [3, 3],
];

function townJudge(n, trustArray) {
  const outgoingEdges = new Map();
  const incomingEdges = new Map();
  const vertices = new Set();
  for (let edge of trustArray) {
    vertices.add(edge[0]);
    vertices.add(edge[1]);

    incomingEdges.set(
      edge[1],
      incomingEdges.get(edge[1]) ? incomingEdges.get(edge[1]) + 1 : 1
    );

    outgoingEdges.set(
      edge[0],
      outgoingEdges.get(edge[0]) ? outgoingEdges.get(edge[0]) + 1 : 1
    );
  }
  console.log("vertices: ", vertices);

  console.log("incomingEdges: ", incomingEdges);
  console.log("outgoingEdges: ", outgoingEdges);
  for (let vertex of vertices) {
    if (
      !outgoingEdges.get(vertex) &&
      incomingEdges.get(vertex) === vertices.size - 1
    ) {
      return vertex;
    }
  }
  return -1;
}

console.log(townJudge(n, trustArray));
