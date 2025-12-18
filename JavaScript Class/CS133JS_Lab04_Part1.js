/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 1: Exercise starter file by Brian Bird, spring 2022  *
 * For each of the problems, complete the function.                 */
'use strict'

// 1. Complete the do while loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8, 10)
function doWhilePractice() 
{
    let outputString = "";
    let count = 0; // TODO: Set count to the right starting value - Check
    do 
    {
        count += 2// TODO: Add two to count
        outputString += count;
    } while (count < 10); // TODO: put in the correct condition
    return outputString;
}

// 2. Complete the while loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8, 10)
function whilePractice() 
{
    let outputString = "";
    let count = 0; // TODO: Set count to the right starting value
    while (count < 10) // TODO: put in the correct condition
    {
        count += 2// TODO: Add two to count
        outputString += count;
    }
    return outputString;
}

// 3. Complete the for loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8, 10)
function forPractice() 
{
    let outputString = "";
    // TODO: Set the count staring value, the loop condition, and incrment expression
    for (let count = 2; count <= 10; count += 2) 
    {
        outputString += count;
    }
    return outputString;
}

// 4. Use a do while loop to count the number of characters in a sentence.
function countChars(text)
{
    let index = 0; // Beginning position of the string
    let char = ""; // The character at the current position
    do 
    {
        char = text[index]; // Get the character at the current index
        index++; // Move to the next character
    } while (char != undefined);

    return index - 2; // Return the count of characters// TODO: Write the code to complete the exercise.
}

// 5. Use a while loop to count the number of words in a sentence.
function countWords(text) 
{
    let wordCount = 0; // There should always be at least one word
    let index = 1;
    while (index < text.length) 
    {
       if (text[index] !== " ") 
        { 
            wordCount++;
        
        
       while (index < text.length && text[index] !== " ")
        {
            index++;
        }
        
        index++;
    }
    }
    // TODO: Write the code to complete the exercise.
    // Hint: How do we know where one word stops and the next word starts?
    return wordCount;
}

// 6. Use a while loop to check a number to see if it is prime.
function isPrime(maybePrime) 
{
    let isPrimeNumber = true; // assume true, try to prove false
    let counter = 2; 
    // TODO: Write code to initialize a loop counter, then write the loop.
   while (counter * counter <= maybePrime) {
    if (maybePrime % counter === 0) { isPrimeNumber = false; }
    
    counter++; // increment the counter
}
   // Hint 1: In a loop divide maybePrime by every number from 2 to one less than maybePrime
   
    // if the remainder is ever zero, then maybePrime is not a prime number.
    
    // Hint 2: inside the loop use this statement: 

    return isPrimeNumber;
}

// 7. Use a do while loop to find the whole square root of a number
//    Return 0 if there is no whole square root.
function squareRoot(number) 
{
    let root = 1; // This is just a starting point
   
   // TODO: Write a loop that will increment root until either:
    do 
    {
        if  (root * root === number)
        {return root;}
        root++;      // Hint: Use this statement inside the loop: root++;
    }
    while (root * root <= number)
                             //the root is greater then number.
        return  0;
}

// 8. Use a for loop to raise a number to a power
function power(base, exponent) 
{
    let result = 1; // any number raised to the power of 0 will be 1
    
    for (let i =0; i < exponent; i++) 
    {result = result * base;}
    // TODO: Write a loop that will multiply the base by iteslf the number of times specified by exponent.
    // Hint: Use this statement inside the loop: result = result * base 
    return result;
}

// 9. Use a for loop to check a number to see if it is prime.
function isPrime2(maybePrime) 
{
    let isPrimeNumber = true;
   
    for(let i = 2; i * i <= maybePrime; i++)
    {
        if (maybePrime % i === 0)
        {isPrimeNumber = false;
            break;
        }

    }
    
    // TODO: In a loop, divide maybePrime by the loop counter. If there is ever a remainder from
    // the division, this isn't a prime number.
    return isPrimeNumber;
}

// This function is used in the web page to check the other functions
function checkAnswer(elementId, correctAnswer, answer) 
{
    const element = document.getElementById(elementId);
    element.innerHTML += answer;
    if (correctAnswer === answer) {
        element.innerHTML += ", correct";
        element.style.backgroundColor = "green";
    } else {
        element.innerHTML += ", incorrect";
        element.style.backgroundColor = "red";
    }
}