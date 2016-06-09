/* 
	Developed by Dr. Mark E. Lehr
	Modified by Poles Ghayes
	CIS-14A-42098
	06/08/16
	Function which retrieves the information in a form
*/
function getForm(url){
        var $_GET = new Object;
	var info=url.split("?");
        if(info.length>1){
            var nameValuePairs=info[1].split("&");
            for(var i=0;i<nameValuePairs.length;i++){
                    var map=nameValuePairs[i].split("=");
                    var name=map[0];
                    var value=map[1];
                    $_GET[name]=value;
            }
        }
	return $_GET;
}

function deleteCart() {
    localStorage.removeItem("cart");
}