console.log("Script is loaded");


let randomNum = Math.floor(Math.random()*100 + 1)
const submitButton = document.querySelector("#submitButton")
const output = document.querySelector("#output")
const lastGuessText = document.querySelector("#lastGuessText")
const guessField = document.querySelector("#guessField")
const lowOrHi = document.querySelector("#lowOrHi")
const playAgainDiv = document.querySelector(`#playAgainDiv`)
const playAgainButton = document.querySelector(`#playAgainButton`)
const resultDiv = document.querySelectorAll('#resultDiv p')
let playerTurn = 1;
let lastGuess = 0;
const guessList = [];
const maxTurns = 10

submitButton.addEventListener('click', submitButtonClicked);
playAgainButton.addEventListener('click', restartGame)

//testOutput.textContent = `Random Num: ${randomNum}` ;
printAllVariables()


function submitButtonClicked(){
    console.log("Submit Button Clicked");
    lastGuess = guessField.value;
    console.log(lastGuess);
    if(lastGuess == null || lastGuess > 100 || lastGuess < 1){
        alert(`Please make sure to input a number between 1 and 0 when submitting.`)
        return "Please make sure to input a number between 1 and 0 when submitting.";
    }
    playerTurn += 1;
    guessList.push(lastGuess)
    lastGuessText.textContent = `Your guesses: ${guessList.join(", ")}`;
    guessField.value = ``;
    printAllVariables()
    checkGuess();
}

function checkGuess(){
    console.log("Checking Guess....");
    if(lastGuess == randomNum){
        winGame()
    }
    else if (lastGuess > randomNum){
        lowOrHi.textContent = `Your guess was too high!`;
    }
    else if (lastGuess < randomNum){
        lowOrHi.textContent = `Your guess was too low!`;
    }

    if (playerTurn > maxTurns){
        console.log("Out of turns");
        loseGame();
    }
}

function printAllVariables(){
    console.log(`Random Num: ${randomNum}`);
    console.log(`Player Turn: ${playerTurn}`);
}

function winGame(){
    console.log(`You win!`)
    lowOrHi.textContent = `Your guess was correct!`;
    output.textContent = `Congratulations! You win!`;
    output.className = 'alert alert-success';
    endGame()
}

function loseGame(){
    console.log("You lose!")
    output.textContent = `You ran out of turns :( The secret number was ${randomNum}!`;
    output.className = 'alert alert-danger';
    endGame()
}

function endGame(){
    guessField.disabled = true;
    submitButton.disabled = true;
    playAgainDiv.style.display = 'block';
}

function restartGame(){
    playerTurn = 1;
    lastGuess = 0;
    guessList.length = 0;
    randomNum = Math.floor(Math.random()*100 + 1)
    lastGuessText.textContent = '';
    lowOrHi.textContent = '';
    output.textContent = '';
    output.className = '';
    playAgainDiv.style.display = 'none';
    guessField.disabled = false;
    submitButton.disabled = false;
    // for(const x of resultDiv){
    //     x.textContent = "";
    // }
}