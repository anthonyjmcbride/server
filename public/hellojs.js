// CODE BELOW REFACTORED
var input;
if (input) {
  console.log(input);
} else {
  console.log('undefined');
}
// var input;
// if (input === undefined) {
//   console.log('undefined');
// } else {
//   console.log(input);
// }

// SINGLE LINE CODE REFACTORING
var test = false;
var output = test ? "Passed Test" : "Failed Test";
console.log(output);

// CONTROL FLOW (if/else) EXAMPLE
var value = 65;
if (value === 0) {
  console.log("zero");
} else if (value === 1){
  console.log("one");
} else {
  console.log("or something else");
}

// CONTROL FLOW (switch) EXAMPLE
var value = 0;
switch (value) {
  case 0: // notice the colon
  console.log("zero");
    break;
  case 1:
  console.log("one");
    break; // notice the semicolon
  default:
  console.log("or something else");
    break;
}


// LOOPS
// While Loop
var x = 0;
while (x < 10) { // only when (while) x is less than 10
  console.log(x); // rujn this block of code
  x++; // then add one to the value of x (0) after every loop
}
// While Loop using break
var a = 0;
while (true) { // while true
  console.log(a); // run this block of code
  if (a >= 10) { // if the condition is true where a >= 10
    break; // then stop if not true
  } else { // otherwise
    a++; // keep adding 1 to the value of a (0) after every loop
  }
}
// For Loop (common ES3)
for (var i = 0; i <= 10; i++) { // starting from i at 0 while i is less than or equal to 10
  console.log(i); // run this block of code then increment i after every loop (i++)
}
// forEach Loop (newer ES5)
var arr = ['a', 'b', 'c', 'd']; // array
arr.forEach(function(item) { // forEach item in the array (arr)
  console.log(item); // run this code
});


// FUNCTIONS
// 1
function my_function_stmt(arg) { // my_function_stmt takes and argument(arg)
  console.log("inside my fucntion"); // then runs this block of code
  console.log(arg);
}
my_function_stmt("Hola"); // calling the function
// 2
var my_function_stmt = function(arg) { // var my_function_stmt is setting the name of
  console.log("inside my function"); // <- this function expression
  console.log(arg); // <- aka the code it will run on the argument (arg)
}
my_function_stmt("Hola"); // calling the function

// Function require explicit returns
var one = function(){
  return 1; // must input return in order for the function to
}
console.log(one()); // log 1 to the console

function addArgs() {
  console.log('printing args:', arguments);
}
