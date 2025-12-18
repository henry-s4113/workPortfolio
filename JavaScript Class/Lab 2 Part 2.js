function convertTemp() 
{
    const tempC = parseFloat(prompt("Temp in Celsius:"));
    const tempF = (9 / 5) * tempC + 32; 
    return tempF.toFixed(2);
}


const correctAnswers = [
    "salem",    // capital
    "moon",     // sky color
    "26",       // alphabet
    "blue",     // flag color
    "batman",   // super hero
    "red",      // movie glasses
    "green"     // tree leaves
];

function checkAnswer(userAnswer, correctAnswer, resultSpanId) {
    const resultSpan = document.getElementById(resultSpanId);
    resultSpan.innerHTML = userAnswer.toLowerCase() === correctAnswer ? "Correct!" : "Incorrect.";
}