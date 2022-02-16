// Create code for find the number between 0 to 100
// The number should be between 0 to 100


var guess = document.getElementById("guess");
var btn = document.getElementById("btn");
var reset = document.getElementById("reset");
var result = document.getElementById("result");

var number = Math.floor(Math.random() * 101);
// var number = 50;
let attemps=document.getElementById("attemps")
let h2=document.getElementById("h2")
let h3=document.getElementById("h3")
let try1=document.getElementById("try1");
let list1=[0,100];
let x;


btn.addEventListener("click", function(){
    if(guess.value == "" && (guess.value < 0 && guess.value > 100)){
        result.innerHTML = "Please enter a number between 0 to 100";
        result.style.background = "red";
    }
    else{
        var guessnumber = parseInt(guess.value);
        if(guessnumber == number){
            result.innerHTML = "You are right";
            h2.style.fontSize="1.5rem";
            h2.innerText=`Congrats, you found the chosen number ${number} on your ${11-Number(try1.innerText)}. attempt`;
            attemps.style.display = "none";
            reset.style.display = "block";
            btn.style.display = "none";
            guess.value = "";
           
            result.style.color = "green";
            result.style.fontVariant = "small-caps";
            result.style.fontSize = "50px";
            result.style.fontWeight = "bold";             
            result.style.textAlign = "center";
            result.style.border = "4px dotted maroon";
            result.style.borderRadius = "10px";
            result.style.backgroundColor = "yellow";
            result.style.boxShadow = "10px 10px 10px white";

            result.animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateX(100px)'},
                {transform: 'translateX(0px)'},
                {transform: 'translateX(-100px)'},
                {transform: 'translateX(0px)'}
            ],{
                duration: 2000,
                iterations: 3
            });

            resultdiv.animate([
                {transform: 'translateY(0px)'},
                {transform: 'translateY(100px)'},
                {transform: 'translateY(0px)'}
            ],{
                duration: 1000,
                iterations: 3
            });
           
        }
        else if(guessnumber > number && (guessnumber < 100)){
            result.innerHTML = "Your number is too high";
            result.style.color = "red";

            list1.push(guess.value);
            list1.sort(function(a, b){return a - b});
            x = list1.indexOf(guess.value);
            h2.innerText=`Please enter a smaller number, between ${list1[x-1]} and ${list1[x]} `
            try1.innerText=Number(try1.innerText)-1
            if(try1.innerText==0){
                h2.innerText= `Sorry, you failed. The number is ${number}`;
                attemps.style.display = "none";
                reset.style.display = "block";
                btn.style.display = "none";
                guess.value=""
            }

            result.style.color = "red";
            result.style.fontVariant = "cursive";
            result.style.fontSize = "40px";
            result.style.fontWeight = "bold";             
            result.style.textAlign = "center";
            result.style.border = "4px dotted darkred";
            result.style.borderRadius = "25px";
            result.style.backgroundColor = "goldenrod";
            result.style.boxShadow = "10px 10px 10px turquoise";

            result.animate([
                {transform:"translateY(0px)"},
                {transform:"translateY(100px)"},
                {transform:"translateX(75px)"},
                {transform:"translateY(0px)"}
            ],{
                duration: 1000,
                iterations: 3
            });

        }
        else if(guessnumber < number && (guessnumber > 0)){
            result.innerHTML = "Your number is too low";

            list1.push(guess.value);
            list1.sort(function(a, b){return a - b});
            x = list1.indexOf(guess.value);
            h2.innerText=`Please enter a greater number, between ${list1[x]} and ${list1[x+1]} `
            try1.innerText=Number(try1.innerText)-1
            if(try1.innerText==0){
            h2.innerText= `Sorry, you failed. The number is ${number}`;
            attemps.style.display = "none";
            reset.style.display = "block";
            btn.style.display = "none";
            guess.value=""
            }

            result.style.color = "steelblue";
            result.style.fontVariant = "all-petite-caps";
            result.style.fontSize = "40px";
            result.style.fontWeight = "italic";             
            result.style.textAlign = "center";
            result.style.border = "4px dashed darkred";
            result.style.borderRadius = "20px";
            result.style.backgroundColor = "navy";
            result.style.boxShadow = "10px 10px 10px navy";

            result.animate([
                {transform:"translateY(0px)"},
                {transform:"translateY(75px)"},
                {transform:"translateY(0px)"}
            ],{
                duration: 750,
                iterations: 3
            });
         
           
        }
        else{
            result.innerHTML = "Please enter a number between 0 to 100";
            
        }
    }

});


reset.addEventListener("click", function(){
    location.reload();
    try1.innerText=10;
    attemps.style.display = "flex";
    result.style.display = "none";
    reset.style.display = "none";
    guess.value = "";
    h2.innerText="Write the number";
    list1=[0,100];
});








