/*__________________________________________________________________________________
//
//	FILENAME: populateChart.js
//	CREATED: 10/25/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Fills the chart area with zone boxes containing links or dropdowns.
//
//
*/

function populateChart() {
	
	//Get where we are from the zone dropdown at the top of the page
	var currentZone = bid("#zone_from").value;
	
	
	//Fill in what zone we're in on the chart and path area
	bid(".chartZoneName")[0].innerHTML = currentZone;
	bid(".chartZoneName")[1].innerHTML = currentZone;
	
	//Clear out the chart
	bid("#chartArea").innerHTML = "";
	
	//Izzy wizzy let's get busy.
	
	
	
	//Get a list of all the doors in this room
	var doorList = [].concat(getZoneObject(currentZone).doors);
	var doorStringList = [];
	for(var v = 0; v < doorList.length; v++) { doorList[v].zoneName = getZoneObject(currentZone).zone;  doorStringList[v] = doorList[v].doorName; }
	
	var thisZone = getZoneObject(currentZone);
	
	//Append the doors from children zones (zones which share doors but are seperate for pathing purposes)
	if(thisZone.children.length > 0) {
		
		var kids = getChildren(thisZone);
		
		//Iterate through the kids
		for(var ki = 0; ki < kids.length; ki++) {
			
			//Go through all the doors at the kids table.
			for(var vd = 0; vd < kids[ki].doors.length; vd++) {
				
				//Add the current door to the doorlist if its not already there.
				if(doorStringList.indexOf(kids[ki].doors[vd].doorName) == -1) {
					doorList.push(kids[ki].doors[vd]);
					doorList[last(doorList)].zoneName = kids[ki].zone;
				}
			}
		}
		
	}
	
	doorList = jsort(doorList,"doorName");
	
	
	
	//Go through the list of doors in this zone
	for(var vv = 0; vv < doorList.length; vv++) {	
	
	
		var displayName = doorList[vv].doorName;
	
		//Create the chart door box
		var chartDoor = document.createElement("div"); 
		chartDoor.innerHTML = displayName+"<br/>&#x25BC; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#x25BC;<br/>";
		chartDoor.classList.add("chartDoor");
		
		
		//If this door already leads somewhere, display a link to that zone
		if(doorList[vv].zoneTo != "") {
		
			//Create a button with the Zone and Door name that links to that zone.
			chartDoor.appendChild(makeButton("Zone: " + getParentName(doorList[vv].zoneTo) + "<br/>Door: " + doorList[vv].doorTo+"<br/>",function() {
				gotoZone(this.value) 
			},doorList[vv].zoneTo));
			
			//Create a button to destroy the link between zones
			var linkButton = makeButton("X",function(){
				deleteLink(this.dataset.zoneFrom,this.dataset.doorFrom);
			});
			linkButton.style['color'] = 'red';
			linkButton.dataset.zoneFrom = bid("#zone_from").value;
			linkButton.dataset.doorFrom = doorList[vv].doorName;
			
			//Add the link to the chart door
			chartDoor.appendChild(linkButton);
			
			//Add the door to the chart.
			bid("#chartArea").appendChild(chartDoor);
		} 
		
		//If there's no link on this door then display the dropdowns
		else {
		
			//Zone list
			var zoneDropDown = chartDoor.appendChild(dropDownObj.cloneNode(true));
			zoneDropDown.classList.add("zones");
			zoneDropDown.classList.add("zoneList");
			zoneDropDown.id = "zoneList" + vv;
			zoneDropDown.onchange = function() { populateDoorList(); }
			
			//Door list
			var doorDropdown = chartDoor.appendChild(dropDownObj.cloneNode(true)); 
			doorDropdown.id = "doorList" + vv;
			doorDropdown.dataset.zoneElement = "zoneList" + vv;
			doorDropdown.classList.add('doorList');
			
			//Add the chart door to the chart area
			bid("#chartArea").appendChild(chartDoor);
		
			//Button to link the zones
			var linkButton = makeButton("Set Link",function(){
				addLink(
					this.dataset.zoneFrom,
					this.dataset.doorFrom,
					this.dataset.zoneTo,
					this.dataset.doorTo
				);
			});
			
			linkButton.dataset.zoneFrom = doorList[vv].zoneName;
			linkButton.dataset.doorFrom = doorList[vv].doorName;
			linkButton.dataset.doorTo = "doorList" + vv;
			linkButton.dataset.zoneTo = "zoneList" + vv;
			
			//Add the link to the door
			chartDoor.appendChild(linkButton);
			
			//Populate the dropdowns
			populateSceneList("zoneList" + vv);
			populateDoorList(); 
		}
	}
}