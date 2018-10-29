/*__________________________________________________________________________________
//
//	FILENAME: pageOperations.js
//	CREATED: 10/25/2018
//	AUTHOR: Ben Ehrlich
//	PURPOSE: Toggle the top of the page and copy the save area to clipboard
//
//
*/

//Copy the save data to the clipboard
function copyToClipboard() {
	bid("#saveDataArea").select();
	document.execCommand('copy');
	 if (window.getSelection) {window.getSelection().removeAllRanges();}
	 else if (document.selection) {document.selection.empty();}
}


function toggleHeader() {
	var header = bid("#header");
	var headerToggle = bid("#headerToggle");
	if(header.style.display == "none") { header.style.display = "block"; headerToggle.innerHTML = "Close &#128473;"; }
	else { header.style.display = "none"; headerToggle.innerHTML = "Reopen &#10010;"; }
}