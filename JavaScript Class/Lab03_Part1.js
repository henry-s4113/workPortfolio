function checkForAPlus(score) 
{
    if (score > 97) {
        return "A+";
    } else {
        return "A"; 
    }
}

function checkForAnyA(score)
{
    if (score < 90)
        {return "ungraded"}
    else if (score < 93)
        {return "A-"}
    else if (score < 97)
        {return "A"}
    else if (score < 100)
        {return "A+"}
    else if (score >= 100)
        {return "Perfect"}
}

function gpaConversion(grade)
{
    if (grade === "A+")
    {return 4.33}
    if (grade === "A")
    {return 4.0}
    if (grade === "A-")
    {return 3.67}
}

function checkFileType(fileType)
{
    if (fileType === "doc" || fileType === "docx" || fileType === "pdf")
    {return "Accepted"}
    else {return "Wrong Type";}
}

function authenticate(userName, pinNum)
{
    const savedUser = "John";
    const savedPin = 1234;

    if (userName === savedUser && pinNum === savedPin)
        {return "authenticated"}
    else {return "denied";}
}

function romanToDecimal(numeral)
{
  switch (numeral) {
    case "I":
        return 1;
    case "II":
        return 2;
    case "III":
        return 3;
    case "IV":
        return 4;
    case "V":
        return 5;
    default:
        return "out of range";
  }
}