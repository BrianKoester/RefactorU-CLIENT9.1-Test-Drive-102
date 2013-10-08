// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
	var output = '';

	console.log('*********** NEW TEST ***********');
	console.log('arr: ', arr);
	console.log('delimeter: ', delimeter);
	  
	   for (var i=0; i<arr.length; i++) {
	      
	      // check if arr is valid
	      if (arr[i]) output += arr[i];
	     
		  if (i<arr.length-1 && arr[i]) {
		      output += ' ' + delimeter + ' ';
	      };
	   };

	console.log('output: ', output);
	return output;
   
}