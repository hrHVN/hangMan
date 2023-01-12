$(document).ready(function () {
    scoreBoard();
});

class user {
    constructor(
        name,
        score,
        maxGuesses,
        yourGuesses = [],
        palyerSucessWords = []
    ){
        this.name = name;
        this.playerScore = score;
        this.maxGuesses = maxGuesses;
        this.yourGuesses = yourGuesses;
        this.palyerSucessWords = palyerSucessWords
    }

}

function hangMeNot() {
    // function Variables
    let theWord = 'Guess me';
    let guessWordLength = theWord.length;
    let guessWordSmalCaps = theWord.toLocaleLowerCase();
    let maxGuesses = parseInt(guessWordLength * 1.5);

    // User variables
    const yourGuesses = [];
    const palyerSucessWords = [];
    const userName = '';
    let userScore = 0;
    let dificulty = 'easy';

    // Game Loop

    /* Ask for input 
        - subtract number of guesses left
        - add the input to input history
    */
    yourGuesses.push(prompt('Will he hang, or can you avodi it? \nSay a letter between a-å: '));
    maxGuesses--;
    console.log(maxGuesses);
    /* Compare input with solution
    if not equal -> 
        - update progress towards the hanging 
    if equal -> 
        - update the palyerSucessWords
    */
    if (theWord.toLowerCase().includes(yourGuesses[yourGuesses.length - 1])) {
        console.log(yourGuesses[yourGuesses.length - 1])

        palyerSucessWords.push(yourGuesses[yourGuesses.length - 1]);
    }
    else {
        alert(`To the gallows! \n"${yourGuesses[yourGuesses.length - 1]}" is not part of the word `)
    }

    /* Display the current status
        - Display the guessed letters
        - display the word whit unlocked letters
        - display the gallow progress
   */
    // Guessd Letters
    for (let i = 0; i < yourGuesses.length; i++) {
        $('#yourGuesses').append(`<p class="btn btn-outline-primary">${yourGuesses[i].toLocaleUpperCase()}</p>`);
    };
    // Unlocked Word
    const tempWord = []
    let unlocked = '';
    for (let i = 0; i < palyerSucessWords.length; i++) {
        for (let j = 0; j < guessWordLength ; j++) {
            if (palyerSucessWords[i].toLowerCase() == theWord[j].toLowerCase()) {
                tempWord[j] = theWord[j];
            }
            else{
                tempWord[j] ='';
            }
        }
    }
    for (let i = 0; i < tempWord.length; i++){
        unlocked.concat(tempWord[i]);
    }
    $('#theGuessedWord').html(unlocked);

};

// update the palyer scoreboard
function scoreBoard() {
    $('#scoreBoardTable tbody').html('This is a message from the JS');
};

// generic function to update the DOM
function populateDom(value, tag = null, id = null, type = null) {

}