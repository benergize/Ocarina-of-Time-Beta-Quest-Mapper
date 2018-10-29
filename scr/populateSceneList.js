/*__________________________________________________________________________________
//
//	FILENAME: populateSceneList.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Populates a .zone select element with a list of all the zones in the
//	(cont.) game.
//
//
*/

function populateSceneList(whichSceneElement) {
	
		
	//Choose what element(s) to populate
	if(whichSceneElement == undefined) { var sceneElement = bid(".zones"); }
	else { var sceneElement = [bid("#" + whichSceneElement)]; }
	
	//Generate a list of zones -- we use concat here so we don't modify the actual zoneList
	var zoneList = jsort([].concat(zones),"zone"); 
	
	//Go through the chosen <select> elements
	for(var sIndex = 0; sIndex < sceneElement.length; sIndex++) {
	
		//Go through the zoneList
		for(var zIndex = 0; zIndex < zoneList.length; zIndex++) {
			
			//Don't display 'copyZones'
			if(!zoneList[zIndex].hide) {

				//Generate the option for this scene
				var newOption = document.createElement("option");
				newOption.innerHTML = zoneList[zIndex].zone;
				newOption.value = newOption.innerHTML;
				
				//Add it to the selected dropdown element
				sceneElement[sIndex].appendChild(newOption.cloneNode(true)); 
			}
		}
	}
}