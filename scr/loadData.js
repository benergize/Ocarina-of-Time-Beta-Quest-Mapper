/*__________________________________________________________________________________
//
//	FILENAME: loadData.js
//	CREATED: 10/26/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Parses data entered into the loadDataArea textarea and restores the
//	(cont.) zone object to the saved values.
//
//	NOTE: Saving is handled from zoneLinking.js
//
//
*/

function loadData() {

	//Are you suuuure?
	if(confirm("Overwrite current file data?")) {

		//Try and load the save data. If there's a JSON issue, it'll get caught.
		try {
			
			//Parse data entered into the loadData textarea 
			var data = JSON.parse(bid("#loadDataArea").value);
			
			//Set the zone array to the 0th element in the save data
			zones = data[0];
			
			//Set the filename to the 1th element in the save data
			bid("#fileName").value = data[1];
		
			//Populate the save area with the loaded data
			bid("#saveDataArea").value = JSON.stringify(data);
			
			//And then clear the load area
			bid("#loadDataArea").value = "";
			
			//Open the Game zone!
			gotoZone("Game");
			
		} catch(e) {
			console.log(e);
			alert("Invalid data!");
		}
	}
}
