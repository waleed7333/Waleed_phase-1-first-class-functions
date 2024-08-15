// First-class functions and higher-order functions

// Function to run five miles
function runFiveMiles() {
  console.log("Go for a five-mile run");
}

// Function to lift weights
function liftWeights() {
  console.log("Pump iron");
}

// Function to swim 40 laps
function swimFortyLaps() {
  console.log("Swim 40 laps");
}

// Higher-order function for exercise routine
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

// Monday's workout
function Monday() {
  exerciseRoutine(liftWeights);
}

// Using an inline anonymous function
exerciseRoutine(function () {
  console.log("Stretch! Work that core!");
});

// Using an arrow function as an inline function
exerciseRoutine(() => console.log("Stretch! Work that core!"));

// Function returning another function to display breakfast
function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

// Call morningRoutine and store the returned function
const afterExercise = morningRoutine(liftWeights);
// Execute the returned function later
afterExercise(); // Logs the breakfast message

// Function that receives a callback and calls it
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I am a named function");
  };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function");
  };
}
