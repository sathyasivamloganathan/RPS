/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/


const totalScore = {computerScore: 0, playerScore:0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const random = ['Rock', 'Paper', 'Scissors']
    const randomChoise = Math.floor(Math.random()*3)
    return random[randomChoise]
    
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  
    let score;
  
    if(playerChoice == computerChoice){
        score=0
    }
    else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }
    else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }
    else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }
    else{
        score = -1
    }
    return score

  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
    if(score == 1){
            resultDiv.innerText='You won!'
    }

    else if(score == 0){
            resultDiv.innerText="It's Tie!!"
    }

    else{
            resultDiv.innerText="You lose"
    }

    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`

    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

    const computerChoise = getComputerChoice()
    
    const score = getResult(playerChoice, computerChoise)
    totalScore['playerScore']+=score

    
    const show = showResult(score, playerChoice, computerChoise)
    return show

}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    const RPSButton = document.querySelectorAll('.rpsButton')

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    RPSButton[0].onClick = () => console.log(RPSButton[0].value)
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  RPSButton.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
 
  const endGamebtn = document.getElementById('endGameButton')
  endGamebtn.onclick = () => endGame(totalScore)

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = '';
    handsDiv.innerText = '';
    playerScoreDiv.innerText = '';
}

playGame()