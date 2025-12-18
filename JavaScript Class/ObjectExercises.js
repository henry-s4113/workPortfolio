const book = 
{
    title: "No Longer Human",
    author: "Osamu Dazai",
    copyrightDate: 1948,
};

const author = 
{  
    name: "Osamu Dazai",
    birthdate: "June 19, 1909", 
};

function getTitle() 
{
    return book.title;
}

function getAuthor() 
{
    return author.name;
}

function setBirthdate(year)
{
    author.birthdate = year;
}

function cookForOneMinute()
{
    microwave.time = 60;
    return microwave.cook();
}

cdPlayer.volume = 75;
cdPlayer.album = "Greatest Hits"; 


cdPlayer.skip = function() {
    this.track++;
};

delete cdPlayer.power;

function listValues() {
    let values = []; // Array to hold the values
    for (let key in cdPlayer) {
        if (cdPlayer.hasOwnProperty(key)) { // Check if the property belongs to the object
            values.push(cdPlayer[key]); // Add the value to the array
        }
    }
    return values.join(", "); // Return the values as a comma-separated string
}

const tasks = [];

function Task(description, priority, complete)
{
    this.description
    this.priority
    this.complete
}

function addTask(name, priority) {
    const newTask = new Task(name, priority);
    tasks.push(newTask);
}

function removeTask()
{
    //To Do: a function that has one parameter: an array
}

function changeDone(){}