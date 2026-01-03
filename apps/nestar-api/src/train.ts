// MIT TASK ZN

function rotateArray(arr: number[], index: number): number[] {
  const firstPart = arr.slice(0, index);
  const secondPart = arr.slice(index);
  return [...secondPart, ...firstPart];
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));



// MIT TASK ZL
// function stringToKebab(text: string): string {
//   return text
//     .toLowerCase()        
//     .trim()              
//     .split(' ')          
//     .join('-');         
// }
// console.log(stringToKebab("I love Kebab")); 


// TASK ZM

// function reverseInteger(num: number): number {
//   const reversed = num.toString().split('').reverse().join('');
//   return Number(reversed);
// }
// console.log(reverseInteger(123456789));


// MIT TASK ZK

// function printNumbers(): void {
//   let count = 1;
//   const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
//     if (count > 5) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }
// printNumbers();


// MIT TASK ZJ 1

// function reduceNestedArray(arr: any[]): number {
//   let sum = 0;
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       sum += reduceNestedArray(item); // recursive chaqiruv
//     } else {
//       sum += item;
//     }
//   }
//   return sum;
// }
// console.log(reduceNestedArray([1, [2, 3, [7]]]));
