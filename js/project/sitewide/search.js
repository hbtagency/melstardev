var clickStatus = 0;
$(".search_button").click(function(){
	if(clickStatus == 0){
		displayOverLay();
		clickStatus = 1;
	}
	else{
		dismissOverLay();
		clickStatus = 0;
	}
});

function displayOverLay(){
			alert("open");
}

function dismissOverLay(){
		alert("close");
}