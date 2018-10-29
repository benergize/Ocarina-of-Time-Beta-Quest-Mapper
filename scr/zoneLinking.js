/*__________________________________________________________________________________
//
//	FILENAME: zoneLinking.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Creates/deletes connections between zones.
//
//	NOTE: copyZones are used to synchronize doors between zones that share doors,
// (cont.) ie, Desert Colossus and Desert Colossus (Mirror Shield Entrance)
//
//
*/

//Remove a connection between two zones
function deleteLink(zone,door) {
	
	//Get the zone and door to be cleared.
	var thisZone = getZoneObject(zone);
	var thisDoor = getDoorObject(thisZone,door);
	
	//Clear the connection
	thisDoor.zoneTo = "";
	thisDoor.doorTo = "";
	
	//If this zone has any children friends specified...
	if(thisZone.children.length > 0) {
		
		//Iterate through that list.
		for(var v = 0; v < thisZone.children.length; v++) {
			
			//Get zone object for this copyZone
			var copyZone = getZoneObject(thisZone.children[v]);
			
			//If the copyZone is really a zone...
			if(copyZone != false) {
				
				var copyDoor = getDoorObject(copyZone,door);
				
				//and copyDoor is really a door...
				if(copyDoor != false) {
					
					//Unlink the matching door in the other zone
					copyDoor.zoneTo = "";
					copyDoor.doorTo = "";
				}
			}
			
		}
	}
	
	//Reload this zone
	gotoZone(bid("#zone_from").value);
	
	//Alter the save data area
	bid("#saveDataArea").value = JSON.stringify([zones,bid('#fileName').value]);
	
}

//Add a connection between zones
function addLink(zone_from,door_from,zone_to,door_to) {


	//Get ze objects
	var linkingZone = getZoneObject(zone_from);
	var linkingDoor = getDoorObject(linkingZone,door_from);
	 
	//Create the link
	linkingDoor.zoneTo = bid("#" + door_to).selectedOptions[0].dataset.zone;
	linkingDoor.doorTo = bid("#" + door_to).value; 
	
	//If this zone has children friends specified
	if(linkingZone.children != []) {
		
		//Go through all the copyZones
		for(var v = 0; v < linkingZone.children.length; v++) {
		
			//Get zone object for this copyZone
			copyZone = getZoneObject(linkingZone.children[v])
			
			//If the copyZone is really a zone...
			if(copyZone != false) {
			
				var copyDoor = getDoorObject(copyZone,door_from);
				
				//and copyDoor is really a door...
				if(copyDoor != false) {
					
					//Link the matching door in the other zone
					copyDoor.zoneTo = linkingDoor.zoneTo;
					copyDoor.doorTo = linkingDoor.doorTo;
				}
			}
		}
	}
	
	//Reload the zone
	gotoZone(getParentName(zone_from));
	
	//Alter the save data area
	bid("#saveDataArea").value = JSON.stringify([zones,bid('#fileName').value]);
}