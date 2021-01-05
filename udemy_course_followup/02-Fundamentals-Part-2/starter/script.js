'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive:');

//const interface = 'Audio';
//const private = 534;

// Function
/*
function logger() {
  console.log('My name is Yurim!');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = 'Juice with ${apples} apples and ${oranges} oranges';
  return juice;
}

const appleJuice = fruitProcesser(5, 0);
console.log(appleJuice);
*/
// const age1 = calcAge1(1991);


// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

const age2 = function (birthYear) {
  return 2037 - birthYear;
}

/*
//arrow Function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
*/
function cutFruitprices(fruit) {
    return fruit * 4; 
}

function fruitProcesser(apples, lemons) {
    const applePieces = cutFruitprices(apples);
    const lemonPieces = cutFruitprices(lemons);

    const juice = `Juice with ${applePieces} pieces of apples and ${lemonPieces} pieces of lemon.`;
    return juice;
}

console.log(fruitProcesser(2,3));