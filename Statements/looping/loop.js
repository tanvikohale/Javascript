let year = 2000

// using nested if
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log( year + " is a leap year")
        }else{
            console.log( year + " is not a leap year")
        }
    }else{
          console.log( year + " is a leap year")
    }
}else{
    console.log( year + " is not a leap year")
}

// using if else_if
let leapyear = 2025

if(leapyear % 400 === 0){
    console.log(leapyear + " is a leap year")
}else if(leapyear % 100 === 0){
    console.log(leapyear + " is not a leap year")
}else if(leapyear % 4 === 0){
    console.log(leapyear + " is a leap year")
}else{
    console.log(leapyear + " not a leap year")
}


// Using While loop
 let start = 1500
let org_start = start
let end = 2025

let count = 0

while (start <= end) {
    let year = start
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            count++
            console.log(year)
        }
    } else if (year % 4 == 0) {
        count++
        console.log(year)
    }
    start++
}

console.log("their are total " + count + " leap year in range of " + org_start + " to " + end + " !")

// OR

let leap_year = 2000

while(leap_year <= 2025){
    if(leap_year % 4 === 0){
        if(leap_year % 100 === 0){
            if(leap_year % 400 === 0){
                console.log(leap_year + " is a leap year")
            }
        }else{
            console.log(leap_year + " is a leap year")
        }
    }
    leap_year++ ;
}

// make similar palindrome as of leap year using do while
// let repeat = false

// do{
// let number = org_number = Number(window.prompt("Enter no to check, it is palindrome or not"))

// let rev = 0
// let d = 0
// while(number != 0){
//     d = number % 10
//     rev = rev * 10 + d
//     number = parseInt(number/10)
// }

// console.log(rev)

// if(org_number == rev){
//     console.log(org_number + " is palindrome !")
// }else{
//     console.log(org_number + " is not a palindrome !")
// }
// repeat = window.confirm("Do you have to repeat this process again.....!")

// } while(repeat)

// Bug fix

let choice = false

do {
    let year = Number(window.prompt("enter year to check !"))
    
    do {
        year = Number(window.prompt("Enter a valid year (positive number):"));
        if (year <= 0 || isNaN(year)) {
            alert("Invalid input! Please enter a valid positive year.");
        }

        //here we use alert if year we enter it is less than or equal to 0 then condition is true and it is invalid show prompt again.
        // if we enter anything except year we get a alert that it is invalid 

    } while (year <= 0 || isNaN(year))

        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(year + " is a leap year !")
            } else {
                console.log(year + " is not a leap year !")
            }
        } else if (year % 4 == 0) {
            console.log(year + " is a leap year !")
        } else {
            console.log(year + " is not a leap year !")
        }
    
        choice = window.confirm("do you wish to continue yes/no")


} while (choice)