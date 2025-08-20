// There are two types of searching array

// 1. Linear search


function linearSearch(arr, elements){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === elements){
            return i;
        }
    }
    return -1;
}

let fruits = ["Apple" , "Banana", "Pomegranate", "Grapes"]
let find = "Pomegranate";

let search = linearSearch(fruits, find);
if(search !== -1){
    console.log(`${find} found at index ${search}`);
}else{
    console.log(`Element not found`);
}

// 2. Binary search


function binarySearch(fruit, target) {
    let start = 0;
    let end = fruit.length - 1;

    while (start <= end) {
       
        let mid = (start + end) / 2;  
        mid = parseInt(mid);

        if (fruit[mid] === target) {
            return true; 
        } 
        else if (fruit[mid] < target) {
            start = mid + 1; 
        } 
        else {
            end = mid - 1; 
        }
    }
    return false;
}


let fruit = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Papaya", "Pineapple", "Watermelon"];

console.log(binarySearch(fruit, "Mango"));  
console.log(binarySearch(fruit, "Guava")); 