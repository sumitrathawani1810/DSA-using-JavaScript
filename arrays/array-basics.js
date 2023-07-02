// basics of arrays method. it would help to write algorithms in JS

let person = {
  name: "Swati",
  age: 25,
};

let arr = ["python", "java", "javaScript", person];

console.log(arr.length) // know the length of array

// add element in the end of given array
arr.push('dart')
console.log(arr)

// remove element at the end of given array
arr.pop()
console.log(arr)

// Add  element to Top of the Array
arr.unshift('dart')
console.log(arr)

// remove element from top of the array
arr.shift()
console.log(arr)

// array traverse 
arr.map((item) => {
  console.log(item)
})

// filter elements in an array
const filteredArray = arr.filter((item) => item === 'javaScript'
)
console.log(filteredArray)

/* reduce the array to a single value and executes a provided function for each value of the array (from left to right) 
 and the return value of the function is stored in an accumulator. */
//  here 0 is the initial value
num = [1, 2, 3, 4, 5]
const reduce = num.reduce((prev, value) => {
  return prev + value
}, 0)
console.log(reduce)

// some function in js return true if condition is satisfied in some of the element in array
const some = num.some((item, index, array) => {
  return item > 3;
});

// every function  return true if condition is satisfied every element in an array otherwise return false
num.every((item) => {
  return item > 3
})

// find in js
num.find((item) => item > 3)

// findIndex
console.log(num.findIndex((item) => item === 2));

// Spread and Rest Operators
let num1 = [1, 2, 3];
let num2 = [4, 5, 6, 7];

const finalNums = [...num1, ...num2]; // Spread Operator
console.log(finalNums);

// slice and splice method
// slice method - return a section of array 
console.log(arr)
console.log(arr.slice(0, 3))

// splice method
let fruits = ["apple", "mango", "banana"]
fruits.splice(1, 2, 'orange')
console.log(fruits)

// concat
// let newArray = []
console.log(fruits.concat(num1, num2));

// fill method
console.log(fruits)
console.log(fruits.fill(0, 1))





