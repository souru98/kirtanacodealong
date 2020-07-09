var numsquares = 0;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "EASY" ? numsquares = 3 : numsquares = 6;
                reset();
            }

        );
    }
}

function reset() {
    colors = generateRandomColors(numsquares);
    pickedcolor = pickColor();
    colorDisplay.textContent = pickedcolor;
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length(); i++) {
        if (colors[i]) {
            squares[i].style.display = "black";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";

        }
    }
    h1.style.background = "steelblue";


}
resetButton.addEventListener("click", function() {
    reset();
})

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors())
    }
    return randomColors()
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if (clickedColor == pickedcolor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);

            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}


function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}