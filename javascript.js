console.log("Hello World")

/* variables*/
let computerScore=0;
let humanScore=0; 

/* functions */
function getComputerChoice () {
    let number=Math.trunc(Math.random()*10);
    if (number%3==0) { 
        return "rock";
    } else if (number%3==1) {
        return "paper";
    }  
    return "scissors" ;
}

function getHumanChoice() {
    let human_move=prompt("What's your move ?") ;

    while (["rock","papers","scissors"].includes(human_move.toLowerCase())== false)
        human_move=prompt("That's not an option, What's your move ?");

    return human_move.toLowerCase() ;

}

function playRound(humanChoice,computerChoice) {
    let result;
    if (humanChoice=="rock") {
        if (computerChoice=="scissors") {
            result="You win, rock beats scissors";
            humanScore+=1
        } else if (computerChoice=="paper") {
            result="You loose, paper beats rock";
            computerScore+=1

        } else {result = "It's a tie";}

    } else if (humanChoice=="paper") {
        if (computerChoice=="scissors") {
            result="You loose, scissors beats paper";
            computerScore+=1
        } else if (computerChoice=="rock") {
            result="You win, paper beats rock";
            humanScore+=1
        } else {result = "It's a tie";}

    } else  {
        if (computerChoice=="paper") {
            result="You win, scissors beats paper";
            humanScore+=1
        } else if (computerChoice=="rock") {
            result="You loose, rock beats scissors";
            computerScore+=1
        } else {result = "It's a tie";}
    } ;
    return result ;
}


/* play simulation */

function playGame() {
    computerScore=0;
    humanScore=0; 
    let computerSelection;
    let humanSelection ;

    while (humanScore<5 && computerScore<5) {
        computerSelection=getComputerChoice();
        humanSelection=getHumanChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`the score is ${computerScore} for the machine and ${humanScore} for you`);
    }  ;

    console.log(`End of the game : ${computerScore} for the machine and ${humanScore} for you`);


}

