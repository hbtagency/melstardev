$(document).ready(function(){
    var striped_table = $("table.table-striped tr");
    var counter = 0; 
    striped_table.each(function(){
        if(counter%2 === 0 ){
            $(this).addClass("striped"); 
        }
        counter++;
    });
});



