// Remember Board is an Array of length 9: [0,1,2,3,4,5,6,7,8]
const WIN_CONDITIONS = [
  // BEGIN horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // END horizontal

  // BEGIN vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // END vertical

  // BEGIN diagonal
  [0, 4, 8],
  [2, 4, 6],
  // END diagonal
] as const;

export { WIN_CONDITIONS };
