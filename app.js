let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

function computerChoice(){
    const choice=["r","p","s","l","sp"];
    const numberSelected = Math.floor(Math.random()*5)
    return choice[numberSelected];
}
function convertWord(a){
    if(a==="r") return "ROCK";
    if(a==="p") return "PAPER";
    if(a==="s") return "SCISSOR";
    if(a==="l") return "LIZARD";
    return "SPOCK";
}
function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your: ${convertWord(userChoice)} beats Computer: ${convertWord(compChoice)}. You WIN !!`;
    document.getElementById(userChoice).classList.add('green_glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green_glow'), 400)
}
function loss(userChoice, compChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Computer: ${convertWord(compChoice)} beats Your: ${convertWord(userChoice)}. You LOOSE !!`;
    document.getElementById(userChoice).classList.add('red_glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red_glow'), 400)
}
function draw(userChoice, compChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Both choose: ${convertWord(userChoice)} And ${convertWord(compChoice)}. Hence DRAW !!`;
    document.getElementById(userChoice).classList.add('grey_glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey_glow'), 400)
}
function game(userChoice){
    const compChoice = computerChoice();
    switch(userChoice + compChoice){
        case "sp":
        case "pr":
        case "rl":
        case "lsp":
        case "sps":
        case "psp":
        case "sl":
        case "spr":
        case "lp":
        case "rs":
            win(userChoice, compChoice);
            break; 
        case "pl":
        case "ps":
        case "sr":
        case "ssp":
        case "spp":
        case "spl":
        case "ls":
        case "lr":
        case "rp":
        case "rsp":
            loss(userChoice, compChoice);
            break; 
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw(userChoice, compChoice);
            break;   
    }
}
function main(){
    rock_div.addEventListener("click", () => game("r"))
    paper_div.addEventListener("click", () => game("p"))
    scissors_div.addEventListener("click", () => game("s"))
    lizard_div.addEventListener("click", () => game("l"))
    spock_div.addEventListener("click", () => game("sp"))
}
main();