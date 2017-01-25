/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
var flag = 1;

var spiralTraversal = function(matrix){
  var result=[];
  if(matrix.length === 1){
  	return matrix;
  } 
  if (flag===1){
  	result.concat(matrix[0]);
  	result.concat(columns(matrix,matrix.length-1).shift());
  	flag = -1;
  	return spiralTraversal(minimize(result, 1));
  }else{
  	result.concat(matrix[matrix.length-1].reverse());
  	result.concat(columns(matrix,0).reverse().shift());
  	flag = 1;
  	return spiralTraversal(minimize(result, -1));
  }
};

// return specified columns of a 2D-array  
function columns(arr, col) {
  var results = []; 
  for(let i in arr){
    results.push(arr[i][col]);   
  }
  return results;
}

function minimize(arr, ind) {
  if(ind === 1){
    for(let i in arr){
      arr[i].pop();
    }
    arr.shift();
    return arr;
  }
  if(ind === -1){
    for(let i in arr){
      arr[i].shift();
    }
    arr.pop();
    return arr;  	
  }
}

