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
