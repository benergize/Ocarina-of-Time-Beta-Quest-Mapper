/*__________________________________________________________________________________
//
//	FILENAME: populateDoorList.js
//	CREATED: 10/25/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Fill selected/all .doorList dropdowns with doors belonging to a zone.
//
//
*/

function populateDoorList(whichDoorElement) {

	//Figure out which element(s) we want to populate
	if(whichDoorElement == undefined) { whichDoorElement = bid(".doorList"); }
	else { whichDoorElement = [bid("#"+whichDoorElement)]; }

	//Iterate through that list
	for(var doorIndex = 0; doorIndex < whichDoorElement.length; doorIndex++) {
		
		var thisDoor = whichDoorElement[doorIndex];
		
		//Clear element
		thisDoor.innerHTML = "";
		
		var currentZone = bid("#"+thisDoor.dataset.zoneElement).value;
		
		//Get a sorted list of doors for this zone
		var doorList = jsort(getZoneObject(currentZone).doors,"doorName");
		var doorStringList = [];
		for(var v = 0; v < doorList.length; v++) { doorStringList[v] = doorList[v].doorName; }
		
		
		var thisZone = getZoneObject(bid("#"+thisDoor.dataset.zoneElement).value); 
		if(thisZone.children.length > 0) {
			
			for(var v = 0; v < thisZone.children.length; v++) {
				
				var cz = getZoneObject(thisZone.children[v]);
				
				var inc = true;
				for(var vd = 0; vd < cz.doors.length; vd++) {
					
					if(doorStringList.indexOf(cz.doors[vd].doorName) == -1) {
						doorList.push(cz.doors[vd]);
						doorList[last(doorList)].zone = cz.zone;
					}
				}
				
				
			}
			
		}

		//Iterate through that list
		for(var v = 0; v < doorList.length; v++) {

			if(doorList[v].doorName != "Death" && doorList[v].doorName != "Save Warp") {
			
				//Create the option for this door
				var newOption = document.createElement("option");
				newOption.innerHTML = doorList[v].doorName;
				newOption.value = doorList[v].doorName; 
				newOption.dataset.zone = typeof doorList[v].zone == "undefined" ? currentZone : doorList[v].zone;
				
				//Add the door to the dropdown
				thisDoor.appendChild(newOption);
			}
		}
		
		//Select the first element
		thisDoor.value = thisDoor.options[0].value;
	}
		
	return doorList;
}