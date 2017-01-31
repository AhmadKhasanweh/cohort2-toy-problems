/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// hnadle positive numbers only 
var largestProductOfThree = function(array) {
	array = array.sort(function (a, b) {
		return b - a; 
	})
	return array[0] * array[1] * array[2];
}

// hnadle negative numbers 
var largestProductOfThree = function(arr) {
	let temp = 0
	   ,result = temp;
	for(var i = 0 ; i < arr.length ; i++){
		for(var j = 0 ; j < arr.length ; j++ ){
        	for(var k = 0 ; k < arr.length ; k++){
        		if( i != j && j != k && i != k){
	 				temp = arr[i] * arr[j] * arr[k];
        		}
 				if(temp > result){
 					result = temp;
 				}
        	}
		}
	}
	return result;
}