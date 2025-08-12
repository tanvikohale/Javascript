// wap in js to print all even numbers from 0 to 1000

for (let number1 = 0; number1 <= 10; number1++) {
    if(number1 % 2 != 0) console.log(number1)
}

// FACTORIAL
let start = 1
let end = 10
for ( ; start <= end; start++){
    if(start){
        let number = start
        let fact = 1
        while (number != 0) {
            fact = fact * number
            number--
        }
        console.log(fact)
    }
}

// OR 
let fact = 1
for (let num = 1 ; num <= 10 ; num++){
    fact = fact * num

    console.log("Factorial of " + num + " is :" + fact)
}

// leap year using for loop

let startyear = 2000
let endyear = 2025
let count = 0

for (let year = startyear ; year <= endyear ; year++){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        console.log(year)
        count ++
    }
}
console.log("Total leap year : " + count )