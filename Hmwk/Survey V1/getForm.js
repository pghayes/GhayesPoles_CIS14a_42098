//Poles Ghayes
//CIS-14A-42098
//4/27/2016
//Function to retrieve form information
function getForm(url){
	var info=url.split("?");
	var nameValuePairs=info[1].split("&");
	var $_GET = new Object;
	for(var i=0;i<nameValuePairs.length-1;i++){
		var map=nameValuePairs[i].split("=");
		var name=map[0];
		var value=map[1];
		$_GET[name]=value;
	}
	return $_GET;
}

function deleteResults(){
    localStorage.removeItem("results");
}