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
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    // 4. invoke getGuess from inside a loop, and add the new guess to the prevGusses array 
    do {
      this.prevGuesses.push(this.getGuess());
      
      // call reander mothod to render the result of the guess
      this.render();
    } 
    // while guess is not the secret number;
    while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    },

  // 2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: "Enter a guess between [smallestNum] and [biggestNum]."
/** Ensure that the `getGuess` method returns a value that:
 * Is a *number*, not a *string*.
 * Is between `smallestNum` and `biggestNum`, inclusive.
 * parseInt` returns `NaN` if the string cannot be parsed into a number.
*/

  getGuess: function() {
    
    // create a variable (=guess)
    let guess = null;
    
    // assign guess as an integer pasred (parseInt) from the guess input
     // prompt will keep popping until the guess matches the secretNum
    
    do {
      // parseInt` returns `NaN` if the string cannot be parsed into a number
        // while the guess is not a number or guess isn't between min and max
      guess = parseInt(
        prompt(
          `Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`
          )
        );
    } while (
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    );

    return guess;
  },

  // 5. Add a 'render' method to `game` that `play` will call after a guess has been made that alerts:

  render: function() {

  // - If the secretNum is the same as guess: `Congrats! You guessed the number in [number of prevGuesses]!`
    let promptMsg = null;

    if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum && this.prevGuesses.length <= 1) {
      promptMsg = `Congrats! You guessed the number in ${this.prevGuesses.length} guess!`; // if number of the guess is singular
    } else if (this.prevGuesses[this.prevGuesses.length -1] === this.secretNum && this.prevGuesses.length > 1) {
      promptMsg = `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`; // if number of the guess is plural
    } else {
      // - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
        // - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
      promptMsg = `Your guess is too ${this.prevGuesses[this.prevGuesses.length -1] > this.secretNum ? 'high' : 'low'}\nPrevious guesses: ${this.prevGuesses.join(', ')}`;
    };
  
    // prompt an alert message box
    alert(promptMsg);
  }
  // - The list of previous guesses can be generated using the array `join` method.
};

game.play();
