// MIT TASK ZT

function firstUniqueCharIndex(str: string): number {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueCharIndex("stamp")); 
console.log(firstUniqueCharIndex("warcwraft")); 

// MIT TASK ZS
// function singleNumber(arr: number[]): number {
//   return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))[0];
// }

// console.log(singleNumber([7, 2, 2, 3, 3])); 


// MIT TASK ZR
// function countNumberAndLetters(str: string): { number: number; letter: number } {
//   let number = 0;
//   let letter = 0;
//   for (const char of str) {
//     if (char >= '0' && char <= '9') {
//       number++;
//     } else if (
//       (char >= 'a' && char <= 'z') ||
//       (char >= 'A' && char <= 'Z')
//     ) {
//       letter++;
//     }
//   }
//   return { number, letter };
// }
// countNumberAndLetters("string152%¥");


// MIT TASK ZQ

// function findDuplicates(arr: number[]): number[] {
//   const countMap = new Map<number, number>();
//   const result: number[] = [];
//   for (const num of arr) {
//     countMap.set(num, (countMap.get(num) || 0) + 1);
//   }
//   for (const [key, value] of countMap) {
//     if (value > 1) {
//       result.push(key);
//     }
//   }
//   return result;
// }
// findDuplicates([1, 2, 3, 4, 5, 4, 3, 4]);


// MIT TASK ZP
// function groupAnagrams(strs: string[]): string[][] {
//   const map: Record<string, string[]> = {};
//   for (const word of strs) {
//     const key = word.split('').sort().join('');
//     if (!map[key]) {
//       map[key] = [];
//     }
//     map[key].push(word);
//   }
//   return Object.values(map);
// }

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const result = groupAnagrams(strs);
// console.log(result);



// MIT TASK

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
//   return arr1.every(item => arr2.includes(item));
// }
// areArraysEqual([1, 2, 3], [3, 1, 2]);       
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]);    
// areArraysEqual([1, 2, 3], [4, 1, 2]);       

// MIT TASK ZN

// function rotateArray(arr: number[], index: number): number[] {
//   const firstPart = arr.slice(0, index);
//   const secondPart = arr.slice(index);
//   return [...secondPart, ...firstPart];
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));



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
