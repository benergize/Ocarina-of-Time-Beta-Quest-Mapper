/*__________________________________________________________________________________
//
//	FILENAME: gotoZone.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Change zones, modifying the table, chart, path, and door lists/areas.
//
//
*/

function gotoZone(where) {
	
	where = getParentName(where);
	
	//Set the zone drop down text
	bid("#zone_from").value = where;
	
	//Refresh everything
	populateTable("zone");
	populateChart();
	populateDoorList();
	populatePath();
	
	//Zone back button that we might use later.
	/*var lastZone = bid("#zone_from").value;
	if(lastZone != where) { 
	 
		if(where != zoneChain[last(zoneChain)-1]) { zoneChain.push(where); }
		else { zoneChain.splice(-1) }
		if(zoneChain.length > 1) {
			bid("#lastZoneButton").style['display'] = "inline";
			bid("#lastZoneButton").innerHTML = "previous zone";
			bid("#lastZoneButton").value = zoneChain[last(zoneChain)-1];  
		} else { bid("#lastZoneButton").style['display'] = "none"; }
	}*/
}