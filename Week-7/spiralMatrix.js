// Problem Description Given matrix matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.
// Example:
//Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]

// first round print frist row of matrix
// second round print all last column value till last
// third round print last row in reverse order
// fourth round print first column element till row 2
// repeat

const getSpiralMatrix = (matrix) => {
  const result = [];
  let k = 0; // startRowIndex
  let m = matrix.length - 1; // endRowIndex
  let l = 0; // startColumnIndex
  let n = matrix[0].length - 1; // endColumnIndex
  let count = 0;
  const total = matrix.length * matrix[0].length;
  while (k <= m && l <= n) {
    // print first row of remaining matrix
    for (let i = l; i <= n; i++) {
      result.push(matrix[k][i]);
    }
    k++;
    // print last column of remaining matrix
    for (let i = k; i <= m; i++) {
      result.push(matrix[i][n]);
    }
    n--;
    // print last row of remaining matrix
    if (k <= m) {
      for (let i = n; i >= l; i--) {
        result.push(matrix[m][i]);
      }
      m--;
    }

    // print first column of remaining matrix
    if (l <= n) {
      for (let i = m; i >= k; i--) {
        result.push(matrix[i][l]);
      }
      l++;
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const matrix3 = [
  [2, 5, 8],
  [4, 0, -1],
];

console.log("Orignal Matrix: ", matrix);
console.log("Spiral Order: ", getSpiralMatrix(matrix));

console.log("Orignal Matrix: ", matrix2);
console.log("Spiral Order: ", getSpiralMatrix(matrix2));

console.log("Orignal Matrix: ", matrix3);
console.log("Spiral Order: ", getSpiralMatrix(matrix3));
