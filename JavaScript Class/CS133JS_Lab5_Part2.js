function decimalToRoman(decimal) //I have tried consulting google on why this function doesn't work and I'm still not sure.
{
    const romanNumeral = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    
    return romanNumeral[decimal - 1];
}

let tasks = [];
let priorities = [];
let completions = [];

function addTask(task, priority)
{
    tasks.push(task);
    priorities.push(priority);
    completions.push(false);
}

function removeTask(index)
{  
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index - 1);
        priorities.splice(index - 1);
        completions.splice(index - 1);
    } else {
        return "Error";
    }
} 

function changeDone(index, doneBox)
{
    if (index >= 0 && index < completions.length) {
        completions[index] = doneBox;
    } else {
        return "Error";
    }
}