$(document).ready(function () {
    var striped_table = $("#table-striped-inside table tr");
    /*var counter = 0; 
    striped_table.each(function(){
        if(counter%2 === 0 ){
            $(this).addClass("striped"); 
        }
        counter++;
    });*/
    var tableStripToo = new TableStripTool(striped_table);
    tableStripToo.stripeTable("striped");
});

var TableStripTool = function (table_element) {
    var table;
    this.table = table_element;
}

TableStripTool.prototype.stripeTable = function (className) {
    var counter = 0; 
    this.table.each(function () {
        if (counter % 2 === 0) {
            $(this).addClass(className);
        }
        counter++;
    });
}
