Make a Hang man game, it's pretty straight forward but can be come rely complicated with Dom integration and dificulty levels and so on.

Basic level.
Give the user a prompt when the page/document loads, asking for a letter, and then give the user feed back right/wrong, and then ask again until the word is guessed. 
for simplicity use one specific word. 

This will require you to use:
If statement, prompt, console.log or alert,.

Intermediate:
Have the game select a random word from an Array, and use a while loop to perform the game logic. 
For each guess store the guessed character and if the player guess a previously used character, tell them to pick a new one, also displaying said character using console or alert. 
Display the word count at the beginning of the game, so that the player knows how long the word is.

This will require you to also use:
while loop, array parsing, Array push/pull

Advanced:
Make all the input and output happen in the DOM, only using input fields and paragraphs, and button for submitting. 
also add a username and point scheme, which you store in an array and display on the site next to the "game window".  also try to use some sort of simple styling, CSS/bootstrap/vue/etc.
When displaying the guesses in on the page, each letter should also correspond to the correct letter-position.

This will require you to also use:
document manipulation, html structure and CSS. 

Legendary 
Use api with a dictionary site to select the word(s). 
Add a difficulty level logic so that as they progress in points, they have to guess a longer or more complicated word (i.e. two words). 
Try implementing Class or Object literals in the code logic.