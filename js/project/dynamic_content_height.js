/*
 * Dynamic content height plugin for post list item
 */

window.onload = function(){
	dynamicHeightUpdater();
};

var doit;
window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(function() {		 
    	dynamicHeightUpdater();
    }, 100);
};

function dynamicHeightUpdater(){
	var width = window.innerWidth;
	var numOfEachRow = 3;
	if(width > 767 && width < 1200) numOfEachRow = 2;

	var maxHeight=0; 
	var updated_i = 0;
	var current_i = 1;
	$(".post_list_item").each(function () {
	    // Find highest element
	    $this = $(this);
	    var currentHeight = $this.height() + 30;
	    if ( currentHeight > maxHeight ) {
	        maxHeight=currentHeight;
	    }

	    // console.log(currentHeight + "->" + maxHeight + ":" +current_i);
	    if(current_i % numOfEachRow == 0){
    		//Update min-height for every 2 or 3 elements
    		$(".post_list_item").slice(updated_i,current_i).css("min-height",maxHeight);
    		// console.log("!" + numOfEachRow + "(" + updated_i +"," + current_i + ") Max height:" + maxHeight);
    		updated_i = current_i;
	    	maxHeight = 0;
	    } 
	    current_i++;
	});

	if(width < 768){
		$(".post_list_item").css("min-height","0");
	}
		alert("test");

	var width = window.innerWidth;
	var numOfEachRow = 2;

	var maxHeight=0; 
	var updated_i = 0;
	var current_i = 1;
	$(".function_list_item").each(function () {
		alert("test");
	    // Find highest element
	    $this = $(this);
	    var currentHeight = $this.height() + 30;
	    if ( currentHeight > maxHeight ) {
	        maxHeight=currentHeight;
	    }

	    // console.log(currentHeight + "->" + maxHeight + ":" +current_i);
	    if(current_i % numOfEachRow == 0){
    		//Update min-height for every 2 or 3 elements
    		$(".function_list_item").slice(updated_i,current_i).css("min-height",maxHeight);
    		// console.log("!" + numOfEachRow + "(" + updated_i +"," + current_i + ") Max height:" + maxHeight);
    		updated_i = current_i;
	    	maxHeight = 0;
	    } 
	    current_i++;
	});

	if(width < 768){
		$(".function_list_item").css("min-height","0");
	}
}