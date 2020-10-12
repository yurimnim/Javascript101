//Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job:'teacher'
};

var Person = function(name, yearofBirth, job) {
    this.name = name;
    this.yearOfBirth = yearofBirth;
    this.job = job;
}

var john = new Person('John', 1990, 'teacher');

