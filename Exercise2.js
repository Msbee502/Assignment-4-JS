// EXERCISE 2: Create an array of random numbers 

// Create a function generateRandomArray that accepts one argument: length (the length of the array). 

// Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

// Return the array from the function. 

function generateRandomArray(length){
    const numbers = []
    for (i=0; i < length; i++){
        numbers.push(Math.floor(Math.random() * 100)+1);
    }
    return numbers;
}

console.log(generateRandomArray(5));

// This JavaScript code defines a function called generateRandomArray that creates and returns an array of random integers. Here’s a breakdown of what the code does, particularly with the provided call console.log(generateRandomArray(0));:

// Code Breakdown
// Function Definition:

// function generateRandomArray(length) defines a function that takes one parameter, length. This parameter specifies how many random numbers to generate in the array.
// Array Initialization:

// const numbers = [] initializes an empty array named numbers, which will be used to store the generated random integers.
// For Loop:

// for (i = 0; i < length; i++) sets up a loop that will execute length times:
// It starts with i set to 0.
// The loop continues as long as i is less than length.
// After each iteration, i is incremented by 1.
// Random Number Generation:

// Inside the loop, numbers.push(Math.floor(Math.random() * 100) + 1) generates a random integer between 1 and 100:
// Math.random() produces a floating-point number between 0 (inclusive) and 1 (exclusive).
// Multiplying by 100 scales this number to a range between 0 and 100 (exclusive).
// Math.floor() rounds this number down to the nearest whole number, resulting in values from 0 to 99.
// Adding 1 shifts the range to be between 1 and 100 (inclusive).
// The random number is then added to the numbers array using push.
// Return Statement:

// return numbers; returns the populated numbers array.






// // Array
// // let fruit = ["apple", "orange", "banana"];

// // console.log(fruit[2]);

// // Change arrays
// // let fruit = ["apple", "orange", "banana"];

// // fruit[0] = "kiwi";

// // console.log(fruit[0]);

// //Add to arrays
// // let fruit = ["apple", "orange", "banana"];

// // fruit.push("mango", "kiwi");
// //This adds to the beginning of the array
// // fruit.unshift("coconut");
// //Remove
// // fruit.shift();

// // console.log(fruit);

// //Remove from array
// // let fruit = ["apple", "orange", "banana"];

// // fruit.pop()
// // console.log(fruit);

// let fruit = ["apple", "orange", "banana"];
// fruit.reverse(); //Ändrar ordningen

// console.log(fruit.indexOf("apple")); //Visar vilket nummer appel har
// console.log(fruit.length);//Visar hur många index som finns i arrayen
// console.log(fruit.indexOf("orange")); //Visar vilken plats eller indexnummer en vara har



// For loops. Här räknas Hello upp 8 gånger sen stoppar loopen. 
// for (let i = 1; i <= 8; i++){
//     console.log("Hello!")
// }


//Räknar ner från 10 till 1
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }

//Räknar upp från 1 till 10
// for (let i = 1; i < 11; i++){
//     console.log(i)
// }

//Här visas bara jämna nummer

// for (let i = 1; i <= 10; i++){
//     if (i % 2 ===0){
//     console.log(i)
//     }
// }

//Här visas bara ojämna nummer
// for (let i = 1; i <= 10; i++){
//     if (i % 2 !== 0){
//     console.log(i)
//     }
// }

//Denna funktion visar också ojämna nummer
// for (let i = 1; i <= 10; i+=2){    
//     console.log(i)
    
// }
// //Och denna visar jämna nummer
// for (let i = 2; i <= 10; i+=2){    
//     console.log(i)
    
// }