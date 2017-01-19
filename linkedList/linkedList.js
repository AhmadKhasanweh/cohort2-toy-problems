/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
	if( this.head === null) {
		this.head = {
			value:value,
			next:null
		}
		this.tail = {
			value:value,
			next:null
		}
	} else {
		var a = {
			value:value,
			next:null
		}
		this.tail.next = a;
		this.tail = a;
	}
};

LinkedList.prototype.contains = function(value) {
	var x = this.head
	while ( !(x.next === null) ){
      if( x.value === value ){
      	return true;
      }
      x = x.next;
	 }
    return false;
};

LinkedList.prototype.removeHead = function() {
	let temp = this.head.value;
	this.head = this.head.next;
	return temp;
};

