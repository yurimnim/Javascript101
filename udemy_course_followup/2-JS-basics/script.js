/*
var firstName = 'Yurim';
console.log(firstName);

var lastName = 'Lee';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='teacher';
console.log(job);

*/
/*
//Type coercion
var firstName = 'Yurim';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' is she married? ' + isMarried);

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + ' is she married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
//Basic operators
var year, yearYurim, yearMark;
var year = 2020
ageYurim = 33;
ageMark = 35;

//math operators
yearYurim = year - 33;
yearMark = year - 35;
console.log(yearYurim);

console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

//Logical operators
var johnOlder = ageYurim < ageMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder);
console.log(typeof ageYurim);
*/

/*
var now = 2020;
var yearYurim = 1987;
var fullAge = 18;

var isFullAge = now - yearYurim >= fullAge; //true
console.log(isFullAge);

var ageYurim = now - yearYurim;
var ageMark = 35;
var average = (ageYurim + ageMark) / 2;

console.log(average);

//multiple assignments

var x, y;
x = y = (3+5)*4-6; //
*/

/************************************
 * 
 * Coding Challenge 01
 
 var markHeight = 1.77;
 var johnHeight = 1.8;
 var markMass = 70; 
 var johnMass = 80;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

var isMarkHigherBmi = markBMI > johnBMI;
console.log(markBMI, johnBMI);

console.log('Is Mark\'s BMI higher than John\'s?' + isMarkHigherBmi);
 */

 /*****************************
  * 
  *if / else statements
  */
    /*
  var firstName = 'John';
  var civilStatus = 'Single';

  if(civilStatus === 'Married') {
      console.log(firstName + ' is married');
  } else {
      console.log(firstName + ' is ' + civilStatus);
  }

  var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is ' + civilStatus);
}

var markHeight = 1.77;
var johnHeight = 1.8;
var markMass = 70;
var johnMass = 80;

markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// var isMarkHigherBmi = markBMI > johnBMI;
// console.log(markBMI, johnBMI);

// console.log('Is Mark\'s BMI higher than John   \'s?' + isMarkHigherBmi);

*/

/*
 var firstName = 'John';
 var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age >= 18?'beer':'juice';
console.log(drink);
*/

//falsy values: undefined, null, 0, '' , NaN
//truthy values: NOT falsey values 

/*
var height;
height = 23;
if(height || height === 0) {
    console.log('The variable is defined');
} else {
    console.log('The variable is NOT defined');
}

//Equaility Operator
if (height == '23') {
    console.log('The == operator does type coersion!');
}
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), 
and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. 
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, 
and her team scored 97, 134 and 105 points. Like before, 
log the average winner to the console. 
HINT: you will need the && operator to take the decision. 
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, 
keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var averageJohn = (89+120+103)/3;
var averageMike = (116+94+123)/3;
var averageMary = (97+134+105)/3;

console.log(averageMary, averageMike, averageJohn);
if(averageMary > averageJohn && averageMary> averageMike) {
    console.log('Mary\'s team wins in the average score');
} else if (averageJohn > averageMike && averageJohn > averageMike) {
    console.log('John\'s team wins in average score');
} else {
    console.log('Mike wins in the average score');
}
*/

/*

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1999);
var ageMike = calculateAge(1947);
var ageJane = calculateAge(1967);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirements(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age; 
    
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years'); 
    } else {
        console.log(firstName + ' is already retired.' ); 
    }
}

yearsUntilRetirements(1990, 'John');
yearsUntilRetirements(1987, 'Yurim');
yearsUntilRetirements(1933, 'Mary');

*/

//function declaration

//function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teachs how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer': 
            return firstName + ' designs';
        default: 
            return firstname + ' does somethig else'; 
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
*/

/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

names[names.length] = 'May';
console.log(names);

//different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop(john);
console.log(john);

john.shift(john);
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*
function tipCalculator(bill) {
    var percentage; 
    if(bill < 50) {
        percentage = .2;
    } else if(bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])];
console.log(tips);
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(finalValues);
*/

/*********** 
 * OBJECTS IN JAVASCRIPT
var john = {
    name: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};


console.log(john.name);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] ='Smith';
console.log(jane);
*/

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

console.log(john.calcAge()); 

var age = john.calcAge();
console.log(john);
*/

/*
var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass:78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();

console.log(john,mark);

if(john.bmi > mark.bmi) {
    console.log(john.firstNmae + ' has higher BMI than Mark');
} else if (john.bmi < mark.bmi) {
    console.log(mark.firstNmae + ' has higher BMI than John');
} else {
    console.log('They have same bmi');
}
*/

/**************************
 * Loops and iteration
 * 
 */

 /*
for(var i = 0; i < 10; i++) {
    console.log(i);
} 

var i = 0
while(i<john.length){
    console.log(john[i]);
    i++;
}
*/

/*
var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
      if(typeof john[i] !== 'string') {
        continue; 
      }  
    console.log(john[i]);        
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}

//Looping backward

for(var i = john.length-1; i >= 0; i--) {
    console.log[i];
}
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for(var i = 0; i < this.bills.length; i++) {
            var percentage; 
            var bill = this.bills[i];
            if(bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill*percentage;
        }
    }
}
john.calcTips();
console.log(john);

function calcAvg(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    } 
    return sum / tips.length;
}

john.average = calcAvg(john.tips);
console.log(john);