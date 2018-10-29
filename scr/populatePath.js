/*__________________________________________________________________________________
//
//	FILENAME: populatePath.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Populate the path area. Note that the pathfinding itself actually
//	(cont.) takes place in findPath.js.
//
//
*/

function populatePath() {


	//Clear out the old path
	bid("#pathHere").innerHTML = "";
	
	var currentZone = bid("#zone_from").value;
	var zoneTo = bid("#pathToWhere").value; 

	//Generate the path array
	var newPath = findPath(currentZone,zoneTo);
	 
	
	//Check if there's a path and that we're not already at the destination
	if(newPath.length > 0 && currentZone != zoneTo) {
		
		//Add the first step of the path
		bid("#pathHere").appendChild(
			makeButton(
				"Zone: " + getParentName(currentZone) + 
				"<br/>Door: " + newPath[1].door,
				function() { /* We're already here, so go nowhere. */ }
			)
		);
		
		//Go through the rest of the trail (minus the last step)
		for(var pathIndex = 1; pathIndex < newPath.length - 1; pathIndex++) {
			
			//Add an arrow between path steps
			bid("#pathHere").appendChild(arrow.cloneNode(true));
			
			//Add the step
			bid("#pathHere").appendChild(
				makeButton(
					"Zone: " + getParentName(newPath[pathIndex].zoneTo) + 
					"<br/>Door: " + newPath[pathIndex+1].door,
					function() { gotoZone(this.value); },
					newPath[pathIndex].zoneTo 
				)
			);
		}
		
		//Add a final arrow
		bid("#pathHere").appendChild(arrow.cloneNode(true));
		
		//Conclusory (conlusionary? concluding? concudoncular?) step
		bid("#pathHere").appendChild(
			makeButton(
				"Zone: " + getParentName(newPath[pathIndex].zoneTo) + 
				"<br/>Door: " + newPath[pathIndex].doorTo,
				function() { gotoZone(this.value); },
			newPath[pathIndex].zoneTo
			)
		);
		
	} 
	else {
		
		//If we go here it was either because we're already here or because there was no viable path
		bid("#pathHere").innerHTML = currentZone == zoneTo ? "Already here!" : "No path found from " + currentZone + " to " + zoneTo + "."
	} 
}