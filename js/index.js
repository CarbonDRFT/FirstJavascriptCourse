/*let js = "amazing";
console.log(40 + 8 + 23 - 10); 

let firstName = "Jonas";
console.log(firstName);

let country ="Norway";
let continent ="Europe";
let population ="5 million";
let isIsland ="Island";
let language =""

console.log(country);
console.log(continent);
console.log(population); 
console.log(isIsland);
console.log(typeof isIsland); 


let javascriptIsFun = true;
console.log(javascriptIsFun);


//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);




const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 
x--;
console.log(x); 

// Comparison operator 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

//Coding Challenge:

/*const result = ("BMI");
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;*/

/*const massMark =785;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn); 

if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!" (${BMIJohn})!` )
   } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})! ` )
    }

*/
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonasNew =`I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string....`)
console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple 
lines`); 

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012; 

let century;
if (birthYear <= 2000) { 
     century = 20;
} else {
     century = 21;
}
console.log(century); 

const hasDriverLicense = true; //A

const hasGoodVision =false; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if(shouldDrive) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriverLicense || hasGoodVision || isTired); 

const weightMark = 78; 
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95; 

// const weightMarkSecond = 95;
// const heightMarkSecond = 1.88;
// const weightJohnSecond = 85;
// const heightJohnSecond = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / heightJohn ** 2;

 console.log(BMIMark); 
 console.log(BMIJohn); 

const markHigherBMI = BMIMark > BMIJohn;

console.log(markHigherBMI)

if(BMIMark >= BMIJohn) {
    console.log(`It seems like Mark's BMI which is ${BMIMark} is higher than John's BMI ${BMIJohn}`)
} else {
    console.log(`John have higher BMI than Mark`)
}

// console.log(markHigherBMI);

// const ageLimit = 25; 

// if (ageLimit >= 20) {
//     console.log('Great! You are old enough!')
// } else {
//     const ageLeft = 20 - ageLimit; 
//     console.log(`Sorry, you are too young! Wait another ${ageLeft} years for you to reach 20` ) 
// } */

/*let marksMass = 78;
let marksHeight = 1.69;
let johnMass = 92;
let johnHeigh = 1.76;

marksBMI = marksMass / marksHeight ** 2;
johnBMI = johnMass / johnHeigh ** 2; 

let markHigherBMI = `Mark have BMI of ${marksBMI} and John have BMI of ${johnBMI} which results to John having higher 
BMI than Mark by ${johnBMI - marksBMI}`

const johnHigherBMI = johnBMI > marksBMI;

console.log(marksBMI);
console.log(johnBMI)
console.log(markHigherBMI)
console.log(johnHigherBMI) 
'use strict';

function logger() {
    console.log('My name is Danier');
}

//calling / running / invoking function 

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0) 

// Function expression 
// const calcAge2 = function (birthYeah) {
//    return 2037 - birthYeah;
// }

// Arrow function

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3)

const yearUntilRetirement = birthYeah => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(1991)); 

//ARRAYS

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Danier'
const jonas = [firstName, 'Valiev', 2037-1995, 'teacher', friends];

console.log(jonas)
console.log(jonas.length);

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const newYears = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(newYears[0]);
const age2 = calcAge(newYears[1]);
const age3 = calcAge(newYears[newYears.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(newYears[0]), calcAge(newYears[1]), calcAge(newYears[newYears.length - 1])];
console.log(ages) 

const friends = ['Michael' , 'Steven', 'Peter'];

// Add element to the array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John')
console.log(friends);

//Remove element

friends.pop(); //Last element is being removed
friends.pop(); //Last element is being removed
console.log(friends)

friends.shift(); //Removes first element
console.log(friends)

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob')) */

// OBJECT

// Object gives us the possibility to add names to the value, give them name to each value
// which was not possible with arrays.
// So we are making propperties inside the curly brackets in object
// Object is one of the most fundamental part of the whole Javascript
// We are able to group together variables that really belong together.
// Big difference between Arrays and Objects is that, the order of the values in object does not matter
// at all when we want to retrieve them. In Array, the order which we specify, matters a lot, because
// thats how we access the values.
// We should use array in more order data, while Objects be used in unstructure data

// const danierArray = [
//     'Danier' ,
//     'Valiev' ,
//     2020 - 1995 ,
//     'Student' ,
//     ['John' , 'Eric' , 'Aimee']
// ]

// const danier = {
//     firstName:  'Danier',
//     lastName: 'Valiev',
//     age: 2020 - 1996 ,
//     job: 'Student',
//     friends: ['John' , 'Eric', 'Aimee'],

// }

// console.log(danier);

// console.log(danier.lastName);
// console.log(danier['lastName'])

// const nameKey = 'Name';
// console.log(danier['first' + nameKey])
// console.log(danier['last' + nameKey])

// // console.log(danier.'last' + nameKey) does not work.

// const interestedIn = prompt('What do you want to know about Danier? Choose between firstName, lastName, age, job, and friends')

// if (danier[interestedIn]) {
//     console.log(danier[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// danier.location = 'Norway'
// danier['instagram'] = 'Danier95'

// console.log(danier);

// //Challenge
// // Jonas has 3 friends, and his best friend is called Aimee

// console.log(`${danier.firstName} has ${danier.friends.length} friends, and his girlfriend is named ${danier.friends[2]}`);

// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('You got 6. Loop ended...')
// }

// Coding Challenge 1 - Javascript 2.

/*   
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK
*/

//Test 1

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log('No teams wins...')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(100, 200);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

('use strict');

const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log();

const fiveNumbers = [5, 10, 15, 20, 25];

for (var i = 0; i < fiveNumbers.length; i++) {
  console.log(fiveNumbers[i], typeof fiveNumbers[i]);
}

for (var randomNumbers = 15; randomNumbers <= 25; randomNumbers++) {
  console.log([randomNumbers], typeof [randomNumbers]);
}

console.log('--- ONLY NUMBER 20 ---');
for (var randomNumbers = 15; randomNumbers <= 25; randomNumbers++) {
  if (randomNumbers !== 20) continue;
  console.log([randomNumbers]);
}

let driverLicense = {
  driver: [
    {
      personsName: 'Thomas',
      age: 18,
      canDrive: true,
    },
    {
      personsName: 'Lina',
      age: 16,
      canDrive: false,
    },
  ],
};

driverLicense.driver.forEach((obj, i) => {
  console.log('Drivers name:', obj.personsName);
  console.log('Can the person drive?', obj.canDrive);
});

function whatIDontLike(food) {
  console.log(`I don't like ${food}`);
}

whatIDontLike('browncheese');

function answer(firstArgument, secondArgument) {
  console.log(secondArgument - firstArgument);
}
answer(3, 5);
