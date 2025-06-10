/**
 * Generate a random number between min and max
 * @param {number} min Minimum number to generate
 * @param {number} min Maximum number to generate
 * @return {number} Generated number
 */
function random(min, max) {

    return Math.floor(Math.random() * (max - min + 1) ) + min;

}

// Objects array declaration
const teams = [
    {
        name: 'Team 1',
        scoredGoals: 0,
        receivedFouls: 0
    },
    {
        name: 'Team 2',
        scoredGoals: 0,
        receivedFouls: 0
    },
    {
        name: 'Team 3',
        scoredGoals: 0,
        receivedFouls: 0
    },
    {
        name: 'Team 4',
        scoredGoals: 0,
        receivedFouls: 0
    },
    {
        name: 'Team 5',
        scoredGoals: 0,
        receivedFouls: 0
    }
];

// Declare a new teams array
const receivedFoulsTeamsArray = [];

// Loop the teams array
for (let i = 0; i < teams.length; i++) {

    // Generate randomically scored goals number
    teams[i].scoredGoals = random(0, 5);

    // Generate randomically received fouls number
    teams[i].receivedFouls = random(0, 5);

    // Create a new object containing just team name and received fouls
    const newTeamObject = {
        name: teams[i].name,
        receivedFouls: teams[i].receivedFouls
    };

    // Push new team object to received fouls teams array
    receivedFoulsTeamsArray.push(newTeamObject);

    // Print new array properties
    console.log(`Nome squadra: ${receivedFoulsTeamsArray[i].name}\nFalli subiti: ${receivedFoulsTeamsArray[i].receivedFouls}`);

}