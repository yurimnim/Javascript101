///////////////////////////////////////
// Lecture: Hoisting
/*
 calculateAge(1965);

function calculateAge(year) {
    console.log(2020-year);
}
 calculateAge(1987);

// retirement(1956);
var retirement = function(year) {
    console.log(65-(2020-year));
}

retirement(1999);

//variables 
console.log(age);
var age = 23;
console.log(age);

function foo() {
    var age = 65; 
    console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping
// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/
///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1983);
function calculateAge(year) {
    console.log(2020-year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth : 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();

