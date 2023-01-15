$(document).ready(function () {
    scoreBoard();
});

var userName = null;
var userScore = null;
var theWordToGuess = '';
var secretWord = null;
var difficulty = null;
const guessedLetters = [];
const succesLetters = [];

let maxGuesses = parseInt(theWordToGuess.length * 1.5);

function hangMeNot() {
    
    try {
        selectAWord()
    } catch (e) {
        selectAWord()
    }
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



    //Game end
    if (!maxGuesses || secretword === theWordToGuess) {
        gameEnd();
    }
    $('#theGuessedWord').html(unlocked);

};

function gameEnd() {
    console.log('Game Over!')

    scoreBoard();
    
}

// update the palyer scoreboard
function scoreBoard() {
    $('#scoreBoardTable tbody').html('This is a message from the JS');
    console.log(`usr: ${userName} score: ${getScore()} word:${theWordToGuess} progress: ${secretWord}`);
};

function retunProgress () {
    /* Display the current status
            - Display the guessed letters
            - display the word whit unlocked letters
            - display the gallow progress
       */
    // Guessed Letters
   
    // Unlocked Word
    const tempWord = []
    let unlocked = '';

    for (let i = 0; i < palyerSucessWords.length; i++) {
        for (let j = 0; j < guessWordLength; j++) {
            if (palyerSucessWords[i].toLowerCase() == theWord[j].toLowerCase()) {
                tempWord[j] = theWord[j];
            }
            else {
                tempWord[j] = '';
            }
        }
    }
    for (let i = 0; i < tempWord.length; i++) {
        unlocked.concat(tempWord[i]);
    }
}

function selectAWord() {
    const list = ['a','b','c'];

    theWordToGuess = list[Math.round(Math.random() * (list.length))];
}

/*
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
*/