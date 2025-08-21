let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log("First row:", numbers[0]);      
console.log("Element at row 2, col 3:", numbers[1][2]); 

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
        console.log("Element at [" + i + "][" + j + "]:", numbers[i][j]);
    }
}



let maths = [80, 75, 90];
let science = [85, 70, 95];
let english = [78, 88, 92];

let marks = [maths, science, english];

console.log("Science marks of 2nd student:", marks[1][1]); // 70
console.log("English marks of 3rd student:", marks[2][2]); // 92

for (let i = 0; i < marks.length; i++) {
    console.log("Subject " + (i + 1) + " marks:", marks[i]);
}