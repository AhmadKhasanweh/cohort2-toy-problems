/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/


var dirReduc = function(directions){
// Logically it should work, using debbuger ,in first example, it shows creating an array in line 61 then nothing concated
	var obj = {
		NORTH : 0,
		SOUTH : 0,
		EAST : 0,
		WEST : 0
		}
	    ,arr = [];

	for(let i in directions){
      obj[directions[i]]++ 
	}

	if(obj['NORTH'] >= obj['SOUTH']){
      obj['NORTH']-= obj['SOUTH'];
      obj['SOUTH']=0;
      arr.concat(Array(obj['NORTH']).fill('NORTH'));
	}else{
	  obj['SOUTH']-= obj['NORTH']; 
	  obj['NORTH']=0;
	  arr.concat(Array(obj['SOUTH']).fill('SOUTH'));
	}
	if(obj['EAST'] >= obj['WEST']){
	  obj['EAST']-= obj['WEST']; 
	  obj['WEST']=0;
	  arr.concat(Array(obj['EAST']).fill('EAST'));
	}else{
	  obj['WEST']-= obj['EAST']; 
	  obj['EAST']=0;
	  arr.concat(Array(obj['WEST']).fill('WEST'));
	}
	return arr;
	//return directions;
};

