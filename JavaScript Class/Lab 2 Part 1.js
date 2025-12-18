function jsIsAwesome()
{
  alert("JavaScript is awesome!");
}

function favAnimal( a )
{
  var a = "cat";
  document.write("The " + a +  " is my favorite animal.")
} 

function calcAvgPrice() 
{
  const price1 = 10;
  const price2 = 20;
  const price3 = 30;
  
  let average = (price1 + price2 + price3) / 3;

  document.write("The average price is " + "$" + average )
}

function countLetters(sentence) 
{
  return sentence.length;
}

function quizQuestion(answer)
{
  const correctAnswer = "Salem";
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase())
        {return "True. Salem is the capital of Oregon";}
    else
        {return "False. Salem is the capital of Oregon"; }
}

function mathQuestion(answer)
{
  const correctAnswer = 56;
  if (parseInt(answer) === correctAnswer)
      {return "Yes 7 x 8 is 56.";}
  else 
      {return "Wrong. 7 x 8 is 56.";}
}

function calcMpg(milesDriven, gallonsUsed)
{
  if (gallonsUsed === 0)
{return "You cannot drive 0 miles"}
  return (milesDriven / gallonsUsed).toFixed(2);
}

function convertTemp(temperatureF) 
{
  const temperatureC = (temperatureF - 32) * (5 / 9);
  return temperatureC.toFixed(2);
}