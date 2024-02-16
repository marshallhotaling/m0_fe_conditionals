// In the exercises below, write your own code where indicated to achieve the desired result.
// One example is already completed. Your task is to complete any remaining prompt.
// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

console.log("the number of number of students is not stricly equel to the number of teachers ",numberStudents === numberTeachers); 

console.log("The number of students is not equal to the number of students", numberStudents !== numberTeachers);

console.log("is numberStudents greater than or equal to 21?", numberStudents >= '21')
// this should log: false


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a comment,in English, explaining what that line of code is doing, including what the comparison will evaluate to.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// this is saying friends is grater than siblings witch the comprihention whuld be true 

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// this is saying that attendees is not equel to meals witch the comprihention whuld be true 


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

console.log(lovesToPlay && lovesToPlay);
// Determine if the dog loves to play and loves treats

console.log(lovesToPlay || lovesDogPark);
// Determine if the dog loves to play or loves the dog park

console.log(lovesToPlay && age <=2)
// Determine if the dog loves to play and is a puppy
// HINT: Use the age variable and assume that a puppy is less than 2 years old