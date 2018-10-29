/*__________________________________________________________________________________
//
//	FILENAME: findPath.js
//	CREATED: 10/25/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Create the array that is the path between two given zones.
//
//
*/

function findPath(startZone,goalZone) {

	//Constructor function for a step in the path
	function PathFriend(currentZone,path,strikes,pathConcluded) {
		this.currentZone = currentZone;
		this.path = path;
		this.strikes = strikes;
		this.pathConcluded = pathConcluded;
	}
	
	var pathBranches = [new PathFriend(startZone,[{"zone":startZone,"door":"","zoneTo":"","doorTo":""}],[],false)];
	var completedPaths = [];
	
	//We have 350 steps on a path before we assume that something has gone wrong and get out of the while loop.
	var sanity = 350;
	
	//Used to track whether or not we made any progress this step in the path
	var hasMoved = true;
	
	while(hasMoved && sanity > 0) {
		
		hasMoved = false;
		
		//Iterate through all active branches
		for(var branchIndex = 0; branchIndex < pathBranches.length; branchIndex++) {
			
			var currentBranch = pathBranches[branchIndex];
			
			//Ensure this branch hasn't ended before proceeding
			if(!currentBranch.pathConcluded) {
				
				var currentZone = getZoneObject(currentBranch.currentZone);  
				var doorList = [].concat(currentZone.doors);
				
				//If this is the starting zone, we have to add all the copyZone's doors to the list of possible doors--
				//otherwise it will assume the only valid doors are the one in the parent zone.
				if(currentZone.zone == startZone) {
					for(var copyIndex = 0; copyIndex < currentZone.children.length; copyIndex++) {
						doorList = doorList.concat(getZoneObject(currentZone.children[copyIndex]).doors);
					}
				}
				doorList = doorList.concat(getZoneObject("Warp Songs").doors);
				doorList = doorList.concat(getZoneObject("Game").doors);
				
				//Iterate through all doors in this zone on the branch
				for(var doorIndex = 0; doorIndex < doorList.length; doorIndex++) {
					
					var currentDoor = doorList[doorIndex];
					var striking = false;
					var struck = false;
					
					//If this door's already been struck, proceed as such.
					if(currentBranch.strikes.indexOf(currentDoor.zoneTo) != -1) { struck = true; }
					
					//If this has a destination and hasn't already been struck
					if(currentDoor.zoneTo != "") {
						
						//Iterate through every step in the path so far
						for(var pathIndex = 0; pathIndex < currentBranch.path.length; pathIndex++) {
						
							var currentPath = currentBranch.path[pathIndex];
							
							
							//If If we've already been to where this door takes us, strike it
							if(currentPath.zone == currentDoor.zoneTo) { striking = true; }
						
						}
					}
					
					//If this door goes nowhere
					else { striking = true; }
					
					
					//If we're striking and weren't already struck
					if(!striking && !struck) {
						
						
						
						//Add this door to the path (make a new variable so it doesn't do horrifying
						//things to the other branches. Trust me.
						var newPath = [].concat(currentBranch.path);
						
						//Don't push to this or it will do horrifying things to the other branches.
						//Trust me.
						newPath[last(newPath)+1] = {
							"zone":currentZone.zone,
							"door":currentDoor.doorName,
							"doorTo":currentDoor.doorTo,
							"zoneTo":currentDoor.zoneTo
						};
						
						
						//If we're at our goal, add this path to the completed paths array
						if(getParentName(currentDoor.zoneTo) == goalZone) { completedPaths.push(newPath); }
						
						//Otherwise start a new branch from here.
						else {
							pathBranches.push(new PathFriend(currentDoor.zoneTo,newPath,currentBranch.strikes,false));
						}
						
						//We've found a new area to explore! Don't leave the while loop.
						hasMoved = true;
					}
					
					//If this door's no good, add it to this branch's strike list
					else if(striking && !struck) { currentBranch.strikes.push(currentDoor.zoneTo); }
				}
				
				//End this branch
				currentBranch.pathConcluded = true;
			
			}
		}
		
		//Just in case something's gone wrong, let's try not to crash their browser.
		sanity--;
	}
	
	//Return the shortest completed path or an empty array object
	return completedPaths == false ? new Object() : completedPaths[0];
	
}