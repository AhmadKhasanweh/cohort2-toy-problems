/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
<<<<<<< HEAD
   	let temp = [value];
    this.stack = temp.concat(this.stack);
=======
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // remove an item from the top of the stack
   this.pop = function(){
<<<<<<< HEAD
   	let temp = this.stack[0];
   	this.stack = this.stack.slice(1);
    return temp;
=======
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // return the number of items in the stack
   this.size = function(){
<<<<<<< HEAD
   	return this.stack.length
=======
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
<<<<<<< HEAD
     inbox.push( value );
=======
     
     }
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
<<<<<<< HEAD
   	  while( inbox.pop() !== undefined ) {
   		outbox.push( inbox.pop() );
   	  }
    return outbox.pop();
=======
    }
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // should return the number of items in the queue
   this.size = function(){
<<<<<<< HEAD
   	return inbox.size()
   }
 }
=======
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
