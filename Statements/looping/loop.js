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