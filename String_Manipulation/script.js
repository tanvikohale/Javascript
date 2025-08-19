let name = "soniya kohale"
console.log(name)

name = name.replace(name.charAt(0),name.charAt(0).toUpperCase())
name = name.replace(name.charAt(name.indexOf(" ")+ 1),name.charAt(name.indexOf(" ")+1).toUpperCase() )

console.log(name)

// wap in js to reverse a string
// hint : indexes and concatenation

let str = window.prompt("Enter your String")
let reversed = ""
let position = str.length 
let choice = false

console.log(str)

while (position > 0) {

    let char = str.charAt(position - 1)
    
    let index = str.indexOf(char)
    
    reversed = reversed + char

    position--
}
console.log(reversed)
choice = window.confirm("do you wish to continue yes/no")

// let string1 = "hello world"

// console.log(string1.charAt(0))
// console.log(string1.charAt(1))
// console.log(string1.charAt(2))
// console.log(string1.charAt(4))
// console.log(string1.charAt(5))
// console.log(string1.charAt(6))
// console.log(string1.charAt(7))
// console.log(string1.charAt(8))
// console.log(string1.charAt(9))
// console.log(string1.charAt(10))
// console.log(string1.charAt(11))



// 1.  WAP to write Only unique characters from "HELLO WORLD"
    //  Output:- H e l o w r d

let strr = "helloworld";
let uniquechar = "";

for (let i = 0; i < strr.length; i++) {
    if (uniquechar.indexOf(strr[i]) === -1) { 
        console.log(strr[i]);
        uniquechar += strr[i];     
    }
}


// WAP to write only Unique characters with Counting no. Of characters from "HELLO WORLD"
//       Output:- 
// H-1
// E-1
// L-3
// O-2
// W-1
// R-1
// D-1

let str1 = "helloworld";
let done = "";

for (let i = 0; i < str11.length; i++) {
    if (done.indexOf(str1[i]) === -1) { 
        let count = 0;
        for (let j = 0; j < str1.length; j++) {
            if (str1[i] === str1[j]) count++;
        }
        console.log(str1[i], "=", count);
        done += str1[i];
    }
}


// create pass word using regex

let isStrongPassword = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{8,}$/;
    return regex.test(password);
};

// Example
console.log(isStrongPassword("Nup@1234")); 
console.log(isStrongPassword("password")); 
console.log(isStrongPassword("NUP12345"));  
console.log(isStrongPassword("Nup12345"));  