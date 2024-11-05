function guessNumberGame() {

    const target = Math.floor(Math.random()* 10 + 1)
    
    let guess = null;

    while (guess !== target) {
        // console.log(`Target: ${target} Guess: ${guess}`);
        guess = parseFloat(prompt('Guess a number between 1 to 10'));

        if (guess > target) {
            console.log("Your guess is to high! Guess again!")
        } else if (guess < target) {
            console.log("Your guess is to low. Guess again!")
        } else {
            console.log("Congratulations, you win!")
        }

    }
}
guessNumberGame();


// const target = Math.floor(Math.random() * 10)
// let guess = null;

// while(guess !== target){
//     console.log(`target:${target} Guess:${guess}`);
//     guess = parseFloat(prompt("Make a guess"));

// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log ("Congratulations, you win!")