console.log('Coding Challenge #1');
console.log('=================================================================================');
// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1); // false

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2); // true
//Coding Challenge #2
console.log('Coding Challenge #2');
console.log('=================================================================================');
// Data 1 output
if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(1)}) is higher than John's (${johnBMI1.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(1)}) is higher than Mark's (${markBMI1.toFixed(1)})!`);
}

// Data 2 output
if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})!`);
}
//Coding Challenge #3
console.log('Coding Challenge #3');
console.log('=================================================================================');
// Test Data
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

// Function to calculate the average
const calcAverage = (scores) => scores.reduce((a, b) => a + b, 0) / scores.length;

let avgDolphins = calcAverage(dolphinsScores);
let avgKoalas = calcAverage(koalasScores);

// Determine the winner
if (avgDolphins > avgKoalas) {
    console.log('Dolphins win the trophy!');
} else if (avgKoalas > avgDolphins) {
    console.log('Koalas win the trophy!');
} else {
    console.log('It\'s a draw!');
}
if (avgDolphins >= 100 && avgDolphins > avgKoalas) {
    console.log('Dolphins win the trophy!');
} else if (avgKoalas >= 100 && avgKoalas > avgDolphins) {
    console.log('Koalas win the trophy!');
} else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('It\'s a draw with both teams scoring at least 100!');
} else {
    console.log('No team wins the trophy.');
}
//Coding Challenge #4
console.log('Coding Challenge #4');
console.log('=================================================================================');
// Test data
let bill = 275;

// Tip calculation using ternary operator
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
//Coding Challenge #5
console.log('Coding Challenge #5');
console.log('=================================================================================');
// Renaming variables to avoid conflict with Challenge #3
const calcAvg = (a, b, c) => (a + b + c) / 3;

// Test Data 1
let avgDolphins5 = calcAvg(44, 23, 71);
let avgKoalas5 = calcAvg(65, 54, 49);

// Function to check the winner
const checkWinner5 = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins.');
    }
};

// Test Data 1
checkWinner5(avgDolphins5, avgKoalas5);

// Test Data 2
checkWinner5(calcAvg(85, 54, 41), calcAvg(23, 34, 27));
console.log('Coding Challenge #6');
console.log('=================================================================================');
// Function to calculate tip
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Test data
const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((bill, i) => bill + tips[i]);

console.log(bills, tips, totals);

console.log('Coding Challenge #7');
console.log('=================================================================================');
// Mark and John objects
let mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

let john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
}

console.log('Coding Challenge #8');
console.log('=================================================================================');
// Bills array for 10 test cases
let bills8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips8 = [];
let totals8 = [];

// Reusing calcTip function from previous challenges
for (let i = 0; i < bills8.length; i++) {
    let tip = calcTip(bills8[i]);
    tips8.push(tip);
    totals8.push(bills8[i] + tip);
}

console.log(bills8, tips8, totals8);

// Bonus: Function to calculate the average (renamed)
const calcAvg8 = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Using the new calcAvg8 function
console.log(calcAvg8(totals8)); // Calculate average of totals


console.log('Coding Challenge #9');
console.log('=================================================================================');
// Function to print the forecast
const printForecast = arr => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(str + '...');
};

// Test data
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

//
//JavaScript in the Browser: DOM and Events
console.log('=================================================================================');
console.log('JavaScript in the Browser: DOM and Events');
console.log('Coding Challenge #1');
console.log('=================================================================================');



//Data Structures, Modern Operators and Strings
console.log('=================================================================================');
console.log('Data Structures, Modern Operators and Strings');
console.log('Coding Challenge #1');
console.log('=================================================================================');
// Given data for the game
const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer', 'Pavard', 'Upamecano', 'Hernandez', 'Davies',
            'Kimmich', 'Goretzka', 'Muller', 'Sané', 'Lewandowski', 'Musiala'
        ],
        [
            'Burki', 'Piszczek', 'Hummels', 'Schulz', 'Brandt',
            'Witsel', 'Reus', 'Hazard', 'Moukoko', 'Bellingham', 'Gnarby'
        ]
    ],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich']
};

// 1. Create player arrays for each team
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Create variables for the goalkeeper and field players for team 1
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// 3. Create an array containing all players
const allPlayers = [...players1, ...players2];

// 4. Create an array with original players + substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Create variables for each odd
const { team1, draw, team2 } = game.odds;

// 6. Function to print goal scorers and total goals
function printGoals(...playerNames) {
    console.log(`Total goals: ${playerNames.length}`);
    playerNames.forEach((player, index) => {
        console.log(`Goal ${index + 1}: ${player}`);
    });
}

// Testing the function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. Determine which team is more likely to win
const winningTeam = (team1 < team2) ? game.team1 : game.team2;
console.log(`${winningTeam} is more likely to win.`);

console.log('Coding Challenge #2');
console.log('=================================================================================');
// 1. Loop over the game.scored array and print each player name
game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// 2. Calculate the average odd
const averageOdd = (team1 + draw + team2) / 3;
console.log(`Average odd: ${averageOdd}`);

// 3. Print odds in a nice formatted way
console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

// 4. Create an object for scorers
const scorers = {};
game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
});
console.log(scorers);



console.log('Coding Challenge #3');
console.log('=================================================================================');
// Sample game events
const gameEvents = {
    17: '⚽ GOAL',
    45: '🔄 SUBSTITUTION',
    64: '🟡 YELLOW CARD',
    69: '⚽ GOAL',
    70: '🔄 SUBSTITUTION',
    80: '🟢 RED CARD',
    90: '⚽ GOAL',
};

// 1. Create an array of different game events
const events = [...new Set(Object.values(gameEvents))];
console.log(events);

// 2. Remove the yellow card event from the game events log
delete gameEvents[64];

// 3. Compute and log the average time between events
const totalEvents = Object.keys(gameEvents).length;
const averageTime = 90 / totalEvents;
console.log(`An event happened, on average, every ${averageTime} minutes.`);

// 4. Log events with half marking
for (const [minute, event] of Object.entries(gameEvents)) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}



// A Closer Look at Functions
console.log('A Closer Look at Functions');
console.log('Coding Challenge #1');
console.log('=================================================================================');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const poll = {
    question: 'Bạn thích ngôn ngữ lập trình nào nhất?',
    options: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: new Array(4).fill(0), // Khởi tạo mảng để giữ số phiếu cho mỗi tùy chọn

    // Phương thức để đăng ký một câu trả lời mới
    registerNewAnswer: function (answer) {
        // Kiểm tra xem đầu vào có phải là một số hợp lệ và nằm trong khoảng tùy chọn
        if (!isNaN(answer) && answer >= 0 && answer < this.answers.length) {
            this.answers[answer]++; // Tăng số lượng câu trả lời
            this.displayResults(); // Hiển thị kết quả sau khi đăng ký câu trả lời
        } else {
            console.log('Đầu vào không hợp lệ. Vui lòng nhập một số từ 0 đến 3.');
        }
    },

    // Phương thức để hiển thị kết quả
    displayResults: function (type = 'array') {
        if (type === 'string') {
            console.log(`Kết quả khảo sát là ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers); // Tùy chọn mặc định là hiển thị mảng
        }
    }
};

// Dữ liệu thử nghiệm cho phần thưởng
const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

// Hiển thị kết quả cho dữ liệu thử nghiệm
poll.answers = data1;
poll.displayResults('array');
poll.displayResults('string');

poll.answers = data2;
poll.displayResults('array');
poll.displayResults('string');

// Hàm để hỏi người dùng một câu hỏi và đọc câu trả lời
function askQuestion() {
    console.log(`${poll.question}`);
    poll.options.forEach((option, index) => {
        console.log(`${index}: ${option}`);
    });
    rl.question('(Nhập số tùy chọn): ', (input) => {
        const answer = Number(input); // Chuyển đổi đầu vào thành số
        poll.registerNewAnswer(answer); // Đăng ký câu trả lời
        rl.close(); // Đóng giao diện đọc
    });
}

// Gọi hàm askQuestion để mô phỏng hành động người dùng
//askQuestion();

//Working With Arrays
console.log('=================================================================================');
console.log('Working With Arrays');
console.log('Coding Challenge #1');
console.log('=================================================================================');
function checkDogs(dogsJulia, dogsKate) {
    // Step 1: Create a shallow copy of Julia's array and remove the first and last two elements
    const correctedJulia = dogsJulia.slice(1, -2);
    
    // Step 2: Create an array with both Julia's and Kate's data
    const allDogs = correctedJulia.concat(dogsKate);

    // Step 3: Log whether each dog is an adult or a puppy
    allDogs.forEach((age, index) => {
        const dogType = age >= 3 ? 'adult' : 'puppy';
        console.log(`Dog number ${index + 1} is an ${dogType}, and is ${age} years old.`);
    });
}

// Test data 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

// Test data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
console.log('Coding Challenge #2');
console.log('=================================================================================');
function calcAverageHumanAge(ages) {
    // Step 1: Convert dog ages to human ages
    const humanAges = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
    
    // Step 2: Exclude all dogs less than 18 human years old
    const adults = humanAges.filter(age => age >= 18);
    
    // Step 3: Calculate the average human age
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    
    return average;
}

// Test data 1
const ages1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(ages1)); // Output the average

// Test data 2
const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(ages2)); // Output the average
console.log('Coding Challenge #3');
console.log('=================================================================================');
const calcAverageHumanAgeArrow = ages => {
    return ages
        .map(age => (age <= 2 ? age * 2 : 16 + age * 4)) // Convert to human ages
        .filter(age => age >= 18) // Exclude dogs less than 18 human years old
        .reduce((acc, age) => acc + age, 0) / ages.length; // Calculate average
};

// Test data 1
console.log(calcAverageHumanAgeArrow(ages1)); // Output the average

// Test data 2
console.log(calcAverageHumanAgeArrow(ages2)); // Output the average
console.log('Coding Challenge #4');
console.log('=================================================================================');
const dogs = [
    { name: 'Fido', weight: 10, currentFood: 200, owners: ['Sarah'] },
    { name: 'Buddy', weight: 16, currentFood: 300, owners: ['John'] },
    { name: 'Max', weight: 8, currentFood: 150, owners: ['Kate'] },
    { name: 'Bella', weight: 12, currentFood: 250, owners: ['Alice', 'Sarah'] },
    { name: 'Lucy', weight: 5, currentFood: 100, owners: ['Michael'] },
];

// Step 1: Calculate recommended food portion for each dog
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28); // Recommended food in grams
});

// Step 2: Find Sarah's dog and log if it's eating too much or too little
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahsDogEatingStatus = sarahsDog.currentFood > sarahsDog.recommendedFood ? 'too much' : 'too little';
console.log(`Sarah's dog is eating ${sarahsDogEatingStatus}.`);

// Step 3: Create arrays for owners of dogs eating too much or too little
const ownersEatTooMuch = dogs
    .filter(dog => dog.currentFood > dog.recommendedFood)
    .flatMap(dog => dog.owners); // Collect owners

const ownersEatTooLittle = dogs
    .filter(dog => dog.currentFood < dog.recommendedFood)
    .flatMap(dog => dog.owners); // Collect owners

// Step 4: Log strings for each array
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Step 5: Check if any dog is eating the recommended amount
const isAnyDogEatingExactlyRecommended = dogs.some(dog => dog.currentFood === dog.recommendedFood);
console.log(isAnyDogEatingExactlyRecommended);

// Step 6: Check if any dog is eating an okay amount of food
const isAnyDogEatingOkayAmount = dogs.some(dog => dog.currentFood > (dog.recommendedFood * 0.90) && dog.currentFood < (dog.recommendedFood * 1.10));
console.log(isAnyDogEatingOkayAmount);

// Step 7: Create an array of dogs eating an okay amount of food
const dogsEatingOkayAmount = dogs.filter(dog => dog.currentFood > (dog.recommendedFood * 0.90) && dog.currentFood < (dog.recommendedFood * 1.10));

// Step 8: Create a shallow copy and sort it by recommended food portion
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);

//Object Oriented Programming (OOP)
console.log('=================================================================================');
console.log('Object Oriented Programming (OOP)');
console.log('Coding Challenge #1');
console.log('=================================================================================');

// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;

    // Method to accelerate the car
    this.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    };

    // Method to brake the car
    this.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    };
}

// Creating two car objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Experimenting with accelerate and brake methods
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();

console.log('Coding Challenge #2');
console.log('=================================================================================');

// ES6 class for Car
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to accelerate the car
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // Method to brake the car
    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // Getter for speed in US miles
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter for speed in US miles
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Creating a new car object
const car3 = new CarCl('Ford', 120);

// Experimenting with accelerate and brake methods, and getter/setter
car3.accelerate();
car3.brake();
console.log(car3.speedUS); // Getting speed in miles
car3.speedUS = 75; // Setting speed in miles
console.log(car3.speed); // Checking the speed in km/h

console.log('Coding Challenge #3');
console.log('=================================================================================');

// Constructor function for Electric Car (EV)
function EV(make, speed, charge) {
    Car.call(this, make, speed); // Inherit from Car
    this.charge = charge;

    // Method to charge the battery
    this.chargeBattery = function (chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery charged to ${this.charge}%`);
    };

    // Overriding the accelerate method
    this.accelerate = function () {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    };
}

// Inheriting from Car
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Creating an electric car object
const ev1 = new EV('Tesla', 120, 23);

// Experimenting with accelerate, brake, and chargeBattery methods
ev1.accelerate();
ev1.accelerate();
ev1.brake(); // Will use the inherited brake method
ev1.chargeBattery(90); // Charging to 90%

console.log('Coding Challenge #4');
console.log('=================================================================================');

// ES6 class for Electric Car (EV)
class EVCl extends CarCl {
    #charge; // Private property

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Battery charged to ${this.#charge}%`);
        return this; // Enable method chaining
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this; // Enable method chaining
    }
}

// Creating a new electric car object
const evCar = new EVCl('Rivian', 120, 23);

// Experimenting with chaining methods
evCar.accelerate().chargeBattery(90).brake();

//ASYNCHRONOUS JAVASCRIPT
console.log('=================================================================================');
console.log('ASYNCHRONOUS JAVASCRIPT');
console.log('Coding Challenge #1');
console.log('=================================================================================');
// Part 1
async function whereAmI(lat, lng) {
    try {
        const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        
        // Check if the response is okay (status in the range 200-299)
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        
        // Log the received data
        console.log(data);
        
        // Destructure city and country from the response
        const { city, country } = data;

        // Log the location
        console.log(`You are in ${city}, ${country}`);
        
        // Part 2: Fetching country details
        const countryRes = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        
        // Check if the response is okay (status in the range 200-299)
        if (!countryRes.ok) {
            throw new Error(`Country not found: ${countryRes.status}`);
        }

        const countryData = await countryRes.json();
        console.log(countryData);

    } catch (error) {
        console.error(error.message);
    }
}

// Test data
whereAmI(52.508, 13.381); // Berlin
whereAmI(19.037, 72.873);  // Mumbai
whereAmI(-33.933, 18.474); // Cape Town

console.log('Coding Challenge #2');
console.log('=================================================================================');
// Part 1
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.onload = () => {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        };

        img.onerror = () => {
            reject(new Error('Image loading failed'));
        };
    });
}

// Part 2
let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
        currentImg = img;
        return wait(2000); // Pause for 2 seconds
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        return wait(2000); // Pause for 2 seconds
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(error => console.error(error));

// Helper function to wait for a specified time
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log('Coding Challenge #3');
console.log('=================================================================================');
// Part 1
async function loadNPause() {
    try {
        currentImg = await createImage('img/img-1.jpg');
        await wait(2000); // Pause for 2 seconds
        currentImg.style.display = 'none';

        currentImg = await createImage('img/img-2.jpg');
        await wait(2000); // Pause for 2 seconds
        currentImg.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
}

// Call the function to test
loadNPause();

// Part 2
async function loadAll(imgArr) {
    try {
        const imgs = await Promise.all(imgArr.map(createImage));
        imgs.forEach(img => img.classList.add('parallel')); // Add the 'parallel' class
        console.log(imgs);
    } catch (error) {
        console.error(error);
    }
}

// Test data for Part 2
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


