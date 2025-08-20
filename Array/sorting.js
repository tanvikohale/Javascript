// 1. Bubble sort

function bubbleSort(fruits) {
    let n = fruits.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (fruits[j] > fruits[j + 1]) {
                
                let temp = fruits[j];
                fruits[j] = fruits[j + 1];
                fruits[j + 1] = temp;
            }
        }
    }

    return fruits;
}


let fruits = ["Mango", "Apple", "Papaya", "Banana"];
console.log(bubbleSort(fruits));