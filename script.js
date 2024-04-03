// Define a function add that takes two parameters and returns their sum
function add(a, b) {
	return a + b;
  }
  
  // Define a function multiply that takes two parameters and returns their product
  function multiply(a, b) {
	return a * b;
  }
  
  // Define a function internal that calculates the product of two values
  function internal() {
	// Calculate the sum of two internal values using the add function
	const added = this.add(this.internal.a, this.internal.b);
	// Calculate the product of the sum and another internal value using the multiply function
	const multiplied = this.multiply(added, this.internal.c);
	// Log the result to the console
	console.log(multiplied)
	// Return the current context (this)
	return this;
  }
  
// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
