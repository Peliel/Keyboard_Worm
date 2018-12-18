let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let selected = alphabet[Math.round(Math.random() * alphabet.length)], pressed, goal = selected;
let movingTo, canMoveTo, canMove;

while (goal == selected) {
    goal = alphabet[Math.round(Math.random() * alphabet.length)];
}

console.log(selected);

let allowedMoves = {
    "A": ["B", "J"],                     "B": ["A", "C", "J", "K"], 
    "C": ["B", "D", "K", "L"],           "D": ["C", "E", "L", "M"], 
    "E": ["D", "F", "M", "N"],           "F": ["E", "G", "N", "O"], 
    "G": ["F", "H", "O", "P"],           "H": ["G", "I", "P", "Q"], 
    "I": ["H", "Q"],                     "J": ["A", "B", "K", "R", "S"], 
    "K": ["B", "C", "J", "L", "S", "T"], "L": ["C", "D", "K", "M", "T", "U"], 
    "M": ["D", "E", "L", "N", "U", "V"], "N": ["E", "F", "M", "O", "V", "W"], 
    "O": ["F", "G", "N", "P", "W", "X"], "P": ["G", "H", "O", "Q", "X", "Y"], 
    "Q": ["H", "I", "P", "Y", "Z"],      "R": ["J", "S"], 
    "S": ["J", "K", "R", "T"],           "T": ["K", "L", "S", "U"], 
    "U": ["L", "M", "T", "V"],           "V": ["M", "N", "U", "W"], 
    "W": ["N", "O", "V", "X"],           "X": ["O", "P", "W", "Y"], 
    "Y": ["P", "Q", "X", "Z"],           "Z": ["Q", "Y"]
};

start = () => {
    document.getElementById(selected).style.background = "white";
    document.getElementById(selected).style.color = "black";
    document.getElementById(goal).style.background = "rgb(100, 100, 100)";
    document.getElementById(goal).style.color = "black";
}

window.addEventListener("keydown", function(e) {
    let key = e.keyCode || e.which;
    pressed = alphabet[key - 65];
    movingTo = [alphabet[key - 65], key];
    canMoveTo = allowedMoves[selected];
    for (let i = 0; i < canMoveTo.length; i++) {
        if (canMoveTo[i] == pressed) {
            this.console.log(canMoveTo[i] + " : " + pressed);
            canMove = true;
            break;
        }
        else {
            this.console.log(canMoveTo[i] + " : " + pressed);
            canMove = false;
        }
    }
    if (canMove) {
        this.document.getElementById(selected).style.background = "black";
        this.document.getElementById(selected).style.color = "white";
        selected = pressed;
        this.document.getElementById(selected).style.background = "white";
        this.document.getElementById(selected).style.color = "black"
    }
    if (selected == goal) {
        this.alert("You win!");
        while (goal == selected) {
            goal = alphabet[Math.round(Math.random() * alphabet.length)];
        }
    }
})