/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var j = Math.floor(array.length/2);
  while(array[j] != target){
    if(array[j] > target){
      j--;
    }
    if(array[j] < target){
      j++;
    }
  }
  return j;
};

