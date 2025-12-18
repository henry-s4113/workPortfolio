function calculateTuition() 
{
    const credits = parseInt(prompt("How many credits?"));
    const outOfState = prompt("Are you out of state? Yes or No?").toLowerCase(); // Convert to lowercase

    const tuitionRate = 100;
    let cost;

    if (isNaN(credits) || credits < 1) {
        alert("Please enter a valid number of credits.");
        return;
    }

   
    if (credits > 16) {
        cost = 16 * tuitionRate;
    } else {
        cost = credits * tuitionRate;
    }

    
    if (outOfState === "yes") {
        cost *= 2;
    }

    return "The cost will be $" + cost 
}

function difficultyRating()
{
    const distance = parseFloat(prompt("Enter the round-trip distance (in miles):"));

    const elevationGain = parseFloat(prompt("Enter the overall elevation gain (in ft):"));
   
    let difficulty;

    if (distance < 4 && elevationGain < 500) {
        difficulty = "Easy";
    } else if (distance < 8 && elevationGain < 1500) {
        difficulty = "Moderate";
    } else if (distance < 12 && elevationGain < 3000) {
        difficulty = "Hard";
    } else {
        difficulty = "Challenging";
    }
    return "The difficulty level is: " + difficulty  
}

function typeTrial()
{
        const activity = prompt("Are you hiking, bike touring, mountain biking, or horseback riding?").toLowerCase();
        let trails;

        switch (activity) {
            case "hiking":
                trails = "Smith Rock State Park", "Mount Pisgah", "Spencer Butte", "Eugene Ridge";
                break;
            case "bike touring":
                trails = "Willamette Valley Scenic Bikeway", "Columbia River Gorge", "Eugene Riverfront";
                break;
            case "mountain biking":
                trails = "Oakridge Trail System", "Hood River Bike Park", "Dirt Surfer";
                break;
            case "horseback riding":
                trails = "Silver Falls State Park", "Cascadia State Park", "Linn County Horse Trails";
                break;
            default:
                trails = "Unknown activity";
        }
        return trails
}
