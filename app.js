const guess = document.getElementById("guess");
const result = document.getElementById("result");
const abuse = document.getElementById("abuse");

let minimum = 1;
let maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let attempts = 0;

function processing(){
    let andaza = Number(guess.value);

    if(isNaN(andaza)){
        result.textContent = "Please enter a valid number.";
    }
    else if(andaza<minimum || andaza>maximum){
        result.textContent = "Number must be between 1 and 100.";
    }
    else{
        attempts++;
        if (andaza < answer && (answer-andaza)<10 ) {
            result.textContent = "Too close. Try a little greater number.";
        }
        else if (andaza < answer) {
            result.textContent = "Too Low. Try a little harder.";
        }
        else if (andaza > answer && (andaza-answer)<10 ) {
            result.textContent = "Too close. Try a little smaller number.";
        }
        else if (andaza < answer) {
            result.textContent = "Too high. Try a little larger number.";
        }
        else{
            if (attempts >= 7){
                result.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;    
                abuse.textContent = "Sharam a rahi itnay chances me guess kar ke?";
            }
            else{
                result.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
            }
        }
    }
    if (andaza != answer) {
        if (attempts == 2) {
            abuse.textContent = "Motivation! Abhi tak nai guess kiya?";
        }
        if (attempts == 3) {
            abuse.textContent = "Motivation! Sharam kar thori si";
        }
        if (attempts == 4) {
            abuse.textContent = "Motivation! Doub ke mar ja";
        }
        if (attempts == 5) {
            abuse.textContent = "Motivation! Lanat ho gai bhai";
        }
        if (attempts == 6) {
            abuse.textContent = "Motivation! Khud Kushi kar le tu";
        }
        if (attempts >= 7) {
            abuse.textContent = "Motivation! Teray bus ki baat nai";
        }
    }
}