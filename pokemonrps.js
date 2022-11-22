var playerOne = 0;
var cpu = 0;

function cpuRandomChoice() {
    var choices = Array("squirtle", "charmander", "turtwig")
    var randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
}

function play(choice) {
    var cpuChoice = cpuRandomChoice()
    var text
    console.log(choice)

    if (choice === "squirtle" && cpuChoice === "charmander") {
        playerOne+=1
        text = "Squirtle Wins"
    } else if (choice === "charmander" && cpuChoice === "turtwig") {
        playerOne+=1
        text = "Charmander Wins"
    } else if (choice === "turtwig" && cpuChoice === "squirtle") {
        playerOne+=1
        text = "Turtwig Wins"
    } else if (choice === cpuChoice) {
        text = "Draw"
    } else {
        cpuChoice+=1
        text = "CPU Wins"
    }

    document.getElementById("result-text").innerHTML = text
    document.getElementById("user-score").innerHTML = playerOne
    document.getElementById("cpu-score").innerHTML = cpu
}



