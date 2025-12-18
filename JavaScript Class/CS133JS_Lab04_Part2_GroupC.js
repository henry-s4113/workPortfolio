/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 2, Group C Starter file by Brian Bird, spring 2022           */

//'use strict'

// 1. Cycling Plan
// Input: number of miles to increase distance by each week
// Output: a string containing weekly totals for the distance and speed
function makePlan(distanceIncrease) {
    let output = "Miles, MPH <br>";
    let initialDistance = 5;
    let ridingTime = 0.5;
    
    for (let week = 0; week < 6; week++) {
        let currentDistance = initialDistance + (distanceIncrease * week);
        let speed = currentDistance / ridingTime;
        
        output += `${currentDistance.toFixed(1)}, ${speed.toFixed(0)}<br>`;
    }
    
    return output;
}


// 2. 
// Input: round trip trail distance, elevation gain of the trail
// Output: a string saying either "Easy", "Moderate", "Hard" or "Challenging"
function reportRating(distance, elevationGain) {
    let rating = "";

    // Check if distance and elevationGain are provided; if not, prompt the user
    if (distance === undefined || elevationGain === undefined) {
        distance = parseFloat(prompt("Enter the round-trip distance (in miles):"));
        elevationGain = parseFloat(prompt("Enter the overall elevation gain (in ft):"));
    }

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
    rating = difficulty; // Store the difficulty rating in the rating variable

    return "The difficulty level is: " + rating;
}
    
// Output just the difficulty level
// 3. Trail Types
// Input: an activity. Choices are: hiking, Bike touring, Mountain biking, Horseback riding
// Output: trails that are suitable for that activity
 function findTrails(activity) {
   let trails = "";
       const activity = prompt("Are you hiking, bike touring, mountain biking, or horseback riding?").toLowerCase();

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
// TODO: Add code for finding trails from last week's lab
    return trails;
}