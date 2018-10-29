/*__________________________________________________________________________________
//
//	FILENAME: objectGetters.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Fetch the object of a door or zone via the zone and door names or
//	(cont.) object.
//
//
*/
	

function getDoorObject(z,d) {
	for(var doorIndex = 0; doorIndex < z.doors.length; doorIndex++) { 
		if(z.doors[doorIndex].doorName == d) { 
			return z.doors[doorIndex]; 
		} 
	}
	return false; 
}
	
function getZoneObject(z) {
	
	for(var v = 0; v < zones.length; v++) {
		if(zones[v].zone == z) { return zones[v]; }
		
	}
	return false;
}

//These aren't exactly children in a typical CS way, more like cousins. The original purpose of this variable
//was to synchronize zones with common entrances/exits for pathfinding. Now It's kind of doubling as a 
//'display all under one name' kind of thing.
function getChildren(z) {
	
	var children = [];
	
	for(var v = 0; v < zones.length; v++) {
		
		for(var vv = 0; vv < z.children.length; vv++) {
			if(z.children[vv] == zones[v].zone) { if(zones[v].parent == z.zone) { children.push(zones[v]); } }
		}
	}
	
	return children;
}

function getParentName(z) {
	var obj = getZoneObject(z);
	if(obj != false) { 
		return obj.parent == "" ? obj.zone : obj.parent;
	} return false;
}