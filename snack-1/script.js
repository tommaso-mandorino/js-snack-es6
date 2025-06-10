// Declare an object array
const bikes = [
    {
        name: 'bike 1',
        weight: 8.5
    },
    {
        name: 'bike 2',
        weight: 7.5
    },
    {
        name: 'bike 3',
        weight: 8.0
    },
    {
        name: 'bike 4',
        weight: 7.0
    },
        {
        name: 'bike 5',
        weight: 9.0
    }
];

// Initialize lightest bike index to the first object array element
let lightestBikeIndex = 0;

// Loop in bikes array
for( let i = 1; i < bikes.length; i++) {

    // IF current bike weight is less than lightest bike weight found until now
    if (bikes[i].weight < bikes[lightestBikeIndex].weight) {

        // Change lightest bike index to the new lighter element index
        lightestBikeIndex = i;
    }
    
}

// Print a message with lightest bike object properties
console.log(`La bici con il peso minore è "${bikes[lightestBikeIndex].name}", con un peso di ${bikes[lightestBikeIndex].weight} kg.`);