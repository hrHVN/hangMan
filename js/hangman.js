import { restGetList } from './dictonary.js';
import * as Graphical from './domManipulation.js';

$(document).ready(function () {
    Graphical.scoreBoard(ScoreList);
    
    $('#StartNewGame').on('click', function () {
        hangMeNot();
    });

    $('#ConsoleLog input').on('click',function () {
        $('#ConsoleLog input').not(this).prop('checked', false);
        difficulty = $('input:checked').val();
    });

    // $('input:checkbox').change(function (e) { 
    //     e.preventDefault();
    // });
});

const domInterface = new Graphical.Populate();

const ScoreList = [
    // Dummy Data
    {
        name: 'The Impervious Player',
        score: 1000000,
        difficulty: 'Asian',
        secret: 'a',
        target: 'a',
        hash: 'TheOneAndOnlyPlayerToHitAMillion'
    },
    {
        name: 'Steven He',
        score: 0,
        difficulty:'Easy',
        secret: 'Default Failure',
        target: 'Send you to Jesus!',
        hash: 'NeverGOnnaWinnThisGame'
    }
    // Dummy Data End
];

var theWordToGuess = null;
var secretWord = null;
var difficulty = '';
const guessedLetters = [];
const succesLetters = [];
// User choice for Dificulty settings
const difficultyOptions = {
    Asian: { pointMultiplier: 1000, maxGuesses: 1 },
    Hard: { pointMultiplier: 200, ekstraGuesses: 5 },
    Medium: { pointMultiplier: 15, ekstrGuesses: 10 },
    Easy: { pointMultiplier: 1, ekstraGuesses: 20 }
};
var maxGuesses = null;

async function hangMeNot() {
    // Game Loop
    const timout = async ms => new Promise(res => setTimeout(res, ms));

    domInterface.getGameDifficulty();
    
    if (difficulty === '') {
        while (difficulty === '') await timout(difficulty,100);
        domInterface.progress('#ConsoleLog', `New Game: ${difficulty}`)
    } else {
        domInterface.progress('#ConsoleLog', `New Game: ${difficulty}`)
        console.log(difficulty);
    }

    /* Ask for input 
        - subtract number of guesses left
        - add the input to input history
    */

    let temp = restGetList('abs');
    /* Compare input with solution
    if not equal -> 
        - update progress towards the hanging 
    if equal -> 
        - update the palyerSucessWords
    */

    //Game end
    // gameEnd();
};

function gameEnd() {
    // Display Gameover
    domInterface.progress('#ConsoleLog', 'Game Over!!');
    // ask for NickName
    const NickName = prompt('Nick name: ');
    // display Score and placement
    const score = () => {
        const regex = /\*/g;
        const x = secretWord.length - (secretWord.split(regex).length - 1);
        const multiplier = difficultyOptions[difficulty]['pointMultiplier'] && 1;

        return (x * (maxGuesses && 1)) * multiplier;
    }

    // Needs to be improved to a real hash algoritm
    const uniqueHAsh = () => {
        return `pl4y3r-s747ts-74rg37${theWordToGuess}-5c0r3${sum}`;
    }

    // add to dataBase
    const player = {
        name: NickName,
        score: score(),
        difficulty: difficulty,
        secret: secretWord,
        target: theWordToGuess,
        hash: uniqueHAsh()
    }
    ScoreList.push(player);
    ScoreList.sort((a, b) => a.score - b.score);

    // update the palyer scoreboard
    domInterface.setPlaceMent(player, ScoreList.indexOf(player));
}

function retunProgress() {
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
    const list = ['a', 'b', 'c'];

    theWordToGuess = list[Math.round(Math.random() * (list.length))];
}

/*
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
*/
