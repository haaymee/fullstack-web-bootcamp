let diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png",
]

function GetRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function OnDiceButtonClicked() {
    let diceRolls = [];

    let currentDiceImgs = document.querySelectorAll(".playerCard img");
    currentDiceImgs.forEach(img => {
        let diceRoll = GetRandomInt(1,6);
        diceRolls.push(diceRoll);

        img.setAttribute("src", diceImages[diceRoll-1]);
    });

    if (diceRolls[0] === diceRolls[1])
        document.querySelector("h2").textContent = "Tied";
    else if (diceRolls[0] > diceRolls[1])
        document.querySelector("h2").textContent = "Player 1 Wins";
    else
        document.querySelector("h2").textContent = "Player 2 Wins";

}

let rollDiceButton = document.querySelector(".buttonContainer button");
rollDiceButton.addEventListener("click", OnDiceButtonClicked);