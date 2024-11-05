// EXERCISE 2: Create an array of random numbers 

// Create a function generateRandomArray that accepts one argument: length (the length of the array). 

// Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

// Return the array from the function. 

function generateRandomArray(){

    let RandomArray = [5]
    for 
}

// Array
// let fruit = ["apple", "orange", "banana"];

// console.log(fruit[2]);

// Change arrays
// let fruit = ["apple", "orange", "banana"];

// fruit[0] = "kiwi";

// console.log(fruit[0]);

//Add to arrays
// let fruit = ["apple", "orange", "banana"];

// fruit.push("mango", "kiwi");
//This adds to the beginning of the array
// fruit.unshift("coconut");
//Remove
// fruit.shift();

// console.log(fruit);

//Remove from array
// let fruit = ["apple", "orange", "banana"];

// fruit.pop()
// console.log(fruit);

let fruit = ["apple", "orange", "banana"];
fruit.reverse(); //Ändrar ordningen

console.log(fruit.indexOf("apple")); //Visar vilket nummer appel har
console.log(fruit.length);//Visar hur många index som finns i arrayen
console.log(fruit.indexOf("orange")); //Visar vilken plats eller indexnummer en vara har



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
for (let i = 1; i <= 10; i+=2){    
    console.log(i)
    
}
//Och denna visar jämna nummer
for (let i = 2; i <= 10; i+=2){    
    console.log(i)
    
}