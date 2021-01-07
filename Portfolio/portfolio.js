const funFact = ["The heads on Easter Island have bodies",
                "The moon has moonquakes",
                "Goosebumps are meant to ward off predators",
                "Humans are the only animals that blush",
                "You lose up to 30 percent of your taste buds during flight",
                "Your nostrils work one at a time"];

function randomFunFact() {
    const randNum = Math.floor(Math.random()*6);
    const buttonColor = Math.floor(Math.random()*16777215).toString(16);

    let fact = document.getElementById('funFact');
    let button = document.getElementById('funFactButton');

    fact.innerHTML = funFact[randNum];
    fact.style.color = '#' + buttonColor;
    button.style.backgroundColor = '#' + buttonColor;
}

