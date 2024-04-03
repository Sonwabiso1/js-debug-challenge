// Define variables for name, age, and hobby
const name = 'John';
const age = 35;
const hobby = 'Coding';

// Define a function logTwice that logs a parameter twice
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
}

// Define a function hobbyFunction that logs a message including name, age, and hobby
function hobbyFunction() {
  // Call logTwice with a message containing name, age, and hobby
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`);
}

// Call hobbyFunction to execute the function and log the message twice
hobbyFunction();
