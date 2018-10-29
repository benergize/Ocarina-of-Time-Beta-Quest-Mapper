/*__________________________________________________________________________________
//
//	FILENAME: populateTable.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Fills in the table area with all the links between zones.
//
//
*/

function populateTable(key) {
	
	
	//Get a sorted list of all the zones
	var zoneConnections = jsort(zones,"zone");

	//Get the table DOM object
	var table = bid("#zoneTable");
	
	//Empty it out
	table.innerHTML = "";
	
	//Make the filter lowercase so it's not case sensitive
	filter = bid("#filter").value.toLowerCase();
	
	//Compile a list of strings of links to prevent sibling shenanigins
	var shownLinks = [];
	
	//Iterate through all the zones
	for(var zoneIndex = 0; zoneIndex < zoneConnections.length; zoneIndex++) {
	
		var thisZone = zoneConnections[zoneIndex];
		
		//Iterate through all the doors in this zone
		for(var doorIndex = 0; doorIndex < thisZone.doors.length; doorIndex++) {
		
			var thisDoor = thisZone.doors[doorIndex];
		
			//Only show zones that have links
			if(thisDoor.zoneTo != "") {
			
				//Apply the filter to only show matching doors/zones
				if(filter == "" || thisZone.zone.toLowerCase().indexOf(filter) != -1 || thisDoor.zoneTo.toLowerCase().indexOf(filter) != -1 || thisDoor.doorTo.toLowerCase().indexOf(filter) != -1 || thisDoor.doorName.toLowerCase().indexOf(filter) != -1) {
					
					//Only display if we haven't already displayed it
					if(shownLinks.indexOf(thisDoor.doorName + "," + thisDoor.doorTo + "," + getParentName(thisZone.zone) + "," + thisDoor.zoneTo) == -1) {
					
						//Add a table containing the zone and door and the zone and door it leads to
						var newRow = table.insertRow();
						newRow.insertCell().appendChild(makeButton(getParentName(thisZone.zone),function(){ gotoZone(this.value) }));
						newRow.insertCell().innerHTML = thisDoor.doorName;
						newRow.insertCell().innerHTML = "";
						newRow.insertCell().appendChild(makeButton(getParentName(thisDoor.zoneTo),function(){ gotoZone(this.value) }));
						newRow.insertCell().innerHTML = thisDoor.doorTo;
						
						//Add a button in the final collumn  to delete this link
						var delButton = document.createElement("button");
						delButton.innerHTML = "Delete";
						delButton.dataset.zoneFrom = thisZone.zone;
						delButton.dataset.doorFrom = thisDoor.doorName;
						delButton.classList.add('deleteButton'); 
						delButton.onclick = function(){ deleteLink(this.dataset.zoneFrom,this.dataset.doorFrom); }
						var f = newRow.insertCell().appendChild(delButton);
						
						//Push to the list of shown zones.
						shownLinks.push(thisDoor.doorName + "," + thisDoor.doorTo + "," + getParentName(thisZone.zone) + "," + thisDoor.zoneTo);
					}
				}
			}
		}
	}
}