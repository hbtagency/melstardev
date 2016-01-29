// $(document).ready(function(){
// $('.three-column-container').on('load', function(){
window.onload = function(){
	var width = window.innerWidth;

	//Get heightest of each element
	var maxHeight = $(".post_list_item").css("height");
	//Update min-height of each element
	$(".post_list_item").css("min-height",maxHeight);
	
	if(width < 768){
		$(".post_list_item").css("min-height","0");
	}
};

var doit;
window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
		var width = window.innerWidth;
		
    	//Get heightest of each element
		var maxHeight = $(".post_list_item").css("height");
		console.log("onsize" + maxHeight);
		//Update min-height of each element
		$(".post_list_item").css("min-height",maxHeight);
		
		if(width < 768){
			$(".post_list_item").css("min-height","0");
		}
    }, 100);
};
