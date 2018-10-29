/*__________________________________________________________________________________
//
//	FILENAME: makeButton.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Little constructor function to create a button element. This probably
//	(cont.) doens't need its own file.
//
//
*/

function makeButton(text,click,eValue) {
			
	var newButton = document.createElement("button");
	newButton.href = '#';
	newButton.innerHTML = text; 
	newButton.style['text-align'] = "left";  
	newButton.value = (eValue == undefined ? text : eValue);  
	newButton.onclick = click; 
	return newButton;
}