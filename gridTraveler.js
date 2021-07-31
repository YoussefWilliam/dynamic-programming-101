const gridTravelerBasic = (row, column) => {
  // Base cases
  if (row === 1 && column === 1) return 1;
  if (row === 0 || column === 0) return 0;

  // Recursize cases
  return (
    gridTravelerBasic(row - 1, column) + gridTravelerBasic(row, column - 1)
  );
};

console.log(gridTravelerBasic(1, 0)); // 0
console.log(gridTravelerBasic(0, 1)); // 0
console.log(gridTravelerBasic(1, 1)); // 1
console.log(gridTravelerBasic(2, 3)); // 3
console.log(gridTravelerBasic(3, 2)); // 3
console.log(gridTravelerBasic(3, 3)); // 6

console.log(gridTravelerBasic(10, 10)); // 48620
// console.log(gridTravelerBasic(18, 18)); // Out of order!! :(

const gridTravelerAdvanced = (row, column, memo = {}) => {
  if (row === 1 && column === 1) return 1;
  if (row === 0 || column === 0) return 0;
  let memoKeys = row + " "  + column;
  if (memoKeys in memo) return memo[memoKeys];

  const downApproach = gridTravelerAdvanced(row - 1, column, memo);
  const rightApproach = gridTravelerAdvanced(row, column - 1, memo);

  memo[memoKeys] = downApproach + rightApproach
  return memo[memoKeys]
};

console.log("Advanced:::", gridTravelerAdvanced(1,0))
console.log("Advanced:::", gridTravelerAdvanced(0,1))
console.log("Advanced:::", gridTravelerAdvanced(1,1))
console.log("Advanced:::", gridTravelerAdvanced(2,3))
console.log("Advanced:::", gridTravelerAdvanced(3,2))
console.log("Advanced:::", gridTravelerAdvanced(3,3))
console.log("Advanced:::", gridTravelerAdvanced(10,10))
console.log("Advanced:::", gridTravelerAdvanced(18,18))
