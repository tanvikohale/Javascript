
// simple practice code

let data = 10

if(data >= 9){
    console.log("Yes its grater than 9")
}

if(data != 10){
    console.log("The data is same as you enter")
}else{
    console.log("The data is not equals to 10")
}


// wap in js to find out greater of 4 and 5 nunbers

let a = 10 , b = 100 , c = 70 , d = 200

if(a > b){
    if(a > c){
        if(a > d){
            console.log("Greatest number is " + a)
        } else{
            console.log("Greatest number is " +d)
        }
    } 
   } else if(b > c){
        if(b > d){
            console.log("gratest number is "+ b)
        } else{
            console.log("gratest number is "+ d)
        }
    } else if(c > d){
        console.log("Greatest number is "+ c)
    } else{
        console.log("gratest number is "+ d)
    }


// wap in js to find out entered number is even or odd | +ve , -ve

// Even & Odd

let num = 2

if(num % 2 == 0){
    console.log(num + " is even")
}else{
    console.log(num + " is odd")
}

// positive amd negative

let number = -7

if(number > 0){
    console.log(number + " is positive")
}else if(number < 0){
    console.log(number + " is negative")
}else{
    console.log(" The number is zero")
}


