// - Allow the player to continually be prompted to enter their guess at the secret number until they guess correctly.
// - If the player has an incorrect guess, display an alert message that informs the player:
//     - Whether their guess is too high or too low, and…
//     - A list of all the previously guessed numbers (without showing the square brackets of an array).
// - If the player has guessed the secret number:
//     - Display an alert message that congrats the player and informs them of how many guesses they took.
//     - End the gameplay.

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  
  // Add a property (=prevGuesses) with an empty array
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },

  // 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: "Enter a guess between [smallestNum] and [biggestNum]."
/** Ensure that the `getGuess` method returns a value that:
 * Is a *number*, not a *string*.
 * Is between `smallestNum` and `biggestNum`, inclusive.
 * parseInt` returns `NaN` if the string cannot be parsed into a number.
*/



  getGuess: function() {
    
    // create a variable (=guess)
    let guess = 0;
    
    // assign guess as an integer pasred (parseInt) from the guess input
     // prompt will keep popping until the guess matches the secretNum
    
    do {
      // parseInt` returns `NaN` if the string cannot be parsed into a number
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
    }
    
    // while the guess is not a number or guess isn't between min and max
    while (
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )

    return guess;
  },
}

game.getGuess()


