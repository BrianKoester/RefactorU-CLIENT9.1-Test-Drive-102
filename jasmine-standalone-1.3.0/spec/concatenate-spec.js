describe("join", function() {

	// test for basic funtionality
	it("array items separated by delimiter", function() {
		var array = ['one', 'two', 'three'];

	  	expect(join(array, 'and'))
	  	.toBe('one and two and three');
	});


	// test for a single item entered
	it("array items separated by delimiter", function() {
		var array = ['one'];

	  	expect(join(array, 'and'))
	  	.toBe('one');
	});


	// test for empty string
	it("array items separated by delimiter", function() {
		var array = ['', 'dog', 'cat'];

	  	expect(join(array, 'and'))
	  	.toBe('dog and cat');
	});


	// test for number in array
	it("array items separated by delimiter", function() {
		var array = [0, 'dog', 'cat'];

	  	expect(join(array, 'and'))
	  	.toBe('dog and cat');
	});


	// test for NaN in middle of array
	it("array items separated by delimiter", function() {
		var array = ['fish', NaN, 'cat', 'whale'];

	  	expect(join(array, 'or'))
	  	.toBe('fish or cat or whale');
	});

});
