// MIT TASK ZJ

function reduceNestedArray(arr: any[]): number {
  let sum = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += reduceNestedArray(item); // recursive chaqiruv
    } else {
      sum += item;
    }
  }
  return sum;
}
console.log(reduceNestedArray([1, [2, 3, [7]]]));
