const Person = function () {};

// initializing function using .prototype to set name and age properties
Person.prototype.initialze = function (name, age) {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};

// Inhert from Person prototype
Teacher.prototype = Object.create(Person.prototype);
// setting the constructor to Teacher
Teacher.prototype.constructor = Teacher;
// initializing function using .prototype to set name and age properties
Teacher.prototype.initialze = function (name, age) {
  // call the initialize function of Person passing the Teacher instance as context
  Person.prototype.initialze.call(this, name, age);
};

// adding teach function
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

// creating an instance if Teacher
let teacher = new Teacher();
// initializing with arguments
teacher.initialze("Anil Rao", 30);
// calling teach method
teacher.teach("Javascript"); // => "Anil Rao is now teaching Javascript"
