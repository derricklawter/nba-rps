let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const lakers_div = document.getElementById("lakers");
const clippers_div = document.getElementById("clippers");
const rockets_div = document.getElementById("rockets");

function getCompChoice(){
    const choices = ['lakers', 'clippers', 'rockets'];
    let compNum = Math.floor(Math.random() * 3);
    return choices[compNum];
}

function convertResult(result){
    if (result == "lakers"){
        return "Lakers"
    }
    if (result == "rockets"){
        return "Rockets"
    }
    if (result == "clippers"){
        return "Clippers"
    }
}


function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertResult(user) + " beat " + convertResult(comp) + ", You took the W!" ;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('green-glow') }, 750);
}

function lose(user, comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertResult(comp) + " beat " + convertResult(user) + ", You took the L!" ;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('red-glow') }, 750);
}

function draw(user, comp){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "You both choose " + convertResult(user)  +  ", You Draw." ;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){ document.getElementById(user).classList.remove('grey-glow') }, 750);
}


function game(userChoice){
    let compChoice = getCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    if (userChoice == "lakers"){
        if(compChoice == 'rockets'){
            lose(userChoice, compChoice);
        }
        else if(compChoice == 'clippers'){
            win(userChoice, compChoice);
        }
        else if (compChoice = "lakers"){
            draw(userChoice, compChoice);
        }
    }
    else if (userChoice == "clippers"){
        if(compChoice == 'rockets'){
            win(userChoice, compChoice);
        }
        else if(compChoice == 'clippers'){
            draw(userChoice, compChoice);
        }
        else if (compChoice = "lakers"){
            lose(userChoice, compChoice);
        }
    }
    else if (userChoice == "rockets"){
        if(compChoice == 'rockets'){
            draw(userChoice, compChoice);
        }
        else if(compChoice == 'clippers'){
            lose(userChoice, compChoice);
        }
        else if (compChoice = "lakers"){
            win(userChoice, compChoice);
        }
    }
}
    

function main(){
lakers_div.addEventListener('click', function(){
    game("lakers");
})

clippers_div.addEventListener('click', function(){
    game("clippers");
})

rockets_div.addEventListener('click', function(){
    game("rockets");
})
}



main();







