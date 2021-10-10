const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((e) => [e]);

  arr.forEach((e, index) => {
  const fixed = e;
  const next = arr.filter((_, idx) => idx !== index) //[...arr.slice(0, index), ...arr.slice(index+1)]
  const permutations = getPermutations(next, selectNumber - 1);
  const result = permutations.map((e) => [fixed, ...e]);
  results.push(...result);
  });

  return results;
}
let aa = getPermutations([1,2,3,4], 3);
console.log(aa);
