let numbers = [1,2,3,4,5]

console.log(numbers)
numbers.splice(3,0,"hello")
console.log(numbers)



let fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 1);

console.log(fruits);


// Array Methods

// 1. concat() -> joins two array

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// 2. includes() -> Checks if a value exists (gives true/false).

let fruits1 = ["apple", "banana"];
console.log(fruits1.includes("banana"));

// 3. filter() -> Creates a new array with elements that pass a condition.

let number = [10, 20, 30, 40];
let result = number.filter(num => num > 20);
console.log(result);

// 4. reverse() -> Reverse the array.

let nums = [1, 2, 3];
nums.reverse();
console.log(nums);

// reduce()