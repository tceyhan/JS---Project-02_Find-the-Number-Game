// Create code for find the number between 0 to 100
// The number should be between 0 to 100


var guess = document.getElementById("guess");
var btn = document.getElementById("btn");
var result = document.getElementById("result");
var number = Math.floor(Math.random() * 100);
var leftNumber= 10;
var count = 0;
var previousNumber = [];


while(count < 10){
    btn.addEventListener("click", () => { });{
        var guess = guess.target.value;
    
      
        if (guess > number) {
            result.innerHTML = "Your guess is too high";
    
           /*  result.style.color = "yellow";
            result.style.fontSize = "20px";
            result.style.fontWeight = "bold";
            result.style.textAlign = "center";
            result.style.margin = "0 auto";
            result.style.width = "50%";
            result.style.padding = "10px";
            result.style.border = "1px dashed black";
            result.style.borderRadius = "10px";
            result.style.backgroundColor = "blue";
            result.style.boxShadow = "10px 10px 10px black";
            result.style.textShadow = "0 0 10px black";
            result.style.transform = "rotate(10deg)";
    
            result.style.animation = "shake 0.5s";
            result.style.animationIterationCount = "infinite";
            result.style.animationDirection = "alternate";
            result.style.animationTimingFunction = "ease-in-out";
            result.style.animationFillMode = "forwards";
            result.style.animationPlayState = "running";     */
    
    
        }
        else if (guess < number) {
            result.innerHTML = "Your guess is too low";
    
            result.style.color = "yellow";
            result.style.fontSize = "20px";
            result.style.fontWeight = "bold";
            result.style.textAlign = "center";
            result.style.margin = "0 auto";
            result.style.width = "50%";
            result.style.padding = "10px";
            result.style.border = "4px dotted black";
            result.style.borderRadius = "10px";
            result.style.backgroundColor = "blue";
            result.style.boxShadow = "10px 10px 10px black";
            result.style.textShadow = "0 0 10px black";
            result.style.transform = "rotate(25deg)";
            result.style.animation = "shake 0.5s";
      
            
        }
        else {
            result.innerHTML = "Your guess is correct";
    
            /* result.style.color = "blue";
            result.style.fontSize = "20px";
            result.style.fontWeight = "bold";
            result.style.textAlign = "center";
            result.style.margin = "0 auto";
            result.style.width = "50%";
            result.style.padding = "10px";
            result.style.border = "4px dotted black";
            result.style.borderRadius = "10px";
            result.style.backgroundColor = "yellow";
            result.style.boxShadow = "10px 10px 10px black";
            result.style.textShadow = "0 0 10px black";
            result.style.transform = "rotate(90deg)";
            result.style.animation = "shake 0.5s"; */
    
        }
    
        previousNumber.push(guessNumber);
        count++;
        leftNumber--;
    
        if (leftNumber == 0) {
            result.innerHTML = "You lose";
        }   
        else {
            result.innerHTML = "You have " + leftNumber + " guesses left";
        }
     }
    } ; // end of while loop)
    
    
    
    
        
        
    
    
    
    
    