/*__________________________________________________________________________________
//
//	FILENAME: helpers.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Your friends and mine-- the lovable helper functions.
//
//
*/

//Non-jQuery #/. DOM shorthand
function bid(arg) { return arg[0] == "#" ? document.getElementById(arg.substring(1)) : document.getElementsByClassName(arg.substring(1)); }

//Sort an array of objects by a key
function jsort(oldArray,key) {
	var newArray = []; 
	var shuffled = [];
	for(var v = 0; v < oldArray.length; v++) { newArray.push(oldArray[v][key]); }
	newArray.sort();
	for(var v = 0; v < oldArray.length; v++) {
		for(var vv = 0; vv < newArray.length; vv++) {
			if(oldArray[vv][key] == newArray[v]) { shuffled.push(oldArray[vv]); }
		}
	}
	return shuffled;
}

//Get the last element in an array
function last(a) { return a.length-1 }

//Debugging only
function echo (a) {console.log(a); }

