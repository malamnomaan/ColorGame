var numCircle = 6;
var colors = generateColors(numCircle);

    // global variables
var circle = document.querySelectorAll(".circle");
var pickedColor = pickColor();
var display = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbtn = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");



easy.addEventListener("click",function(){
    hard.classList.remove("selected")
    easy.classList.add("selected")
    numCircle = 3
    colors = generateColors(numCircle);
    pickedColor = pickColor();
    display.textContent = pickColor();
    resetbtn.textContent = "New colors";
    for(var i = 0; i < circle.length; i++){
        if(colors[i]){
        circle[i].style.backgroundColor = colors[i];
        }
        else{
            circle[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "steelblue"
});

hard.addEventListener("click",function(){
    easy.classList.remove("selected")
    hard.classList.add("selected")
    numCircle = 6;
    colors = generateColors(numCircle);
    pickedColor = pickColor();
    display.textContent = pickColor();
    resetbtn.textContent = "New colors";
    for(var i = 0; i < circle.length; i++){
        circle[i].style.backgroundColor = colors[i];
            circle[i].style.display = "block"
        
    }
    h1.style.backgroundColor = "steelblue"
});

resetbtn.addEventListener("click",function(){
    // restart the game
    colors = generateColors(numCircle);
    pickedColor = pickColor();
    display.textContent = pickedColor; 
    this.textContent = "New Colors"
    message.textContent = " ";
    for(var i=0; i < circle.length; i++){
        // color initialization
        circle[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"
    
});

display.textContent = pickedColor;

for(var i=0; i < circle.length; i++){
    // color initialization
    circle[i].style.backgroundColor = colors[i];

    // click listener
    circle[i].addEventListener("click", function(){
        var clickedColor =this.style.backgroundColor;

        // compare color to rgb value 
        if(clickedColor === pickedColor){
            message.textContent = "Correct";
            resetbtn.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor; 
            
        }
        else{
            this.style.backgroundColor = '#111111';
            message.textContent = "Try again";
        }
    });

}

// all circles to correct match 
function changeColor(color){
    for(var j=0; j < circle.length; j++){
        circle[j].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    // Array to pick random Colors
    var arr = [];
    for(var i=0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // red : 0 to 255
    var r= Math.floor(Math.random() * 256);
    // green : 0 to 255
    var g= Math.floor(Math.random() * 256);
    // blue : 0 to 255
    var b= Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}