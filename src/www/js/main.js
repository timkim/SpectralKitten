var views;
var viewportWidth;


$(document).ready(function() {
	$("#set_list").list();
	$(".nav").click(function(event) {
		$(".active").removeClass("active");
		$(event.target).parent().addClass("active");
		slideViewport($(event.target).data().view);
	});
	
    viewportWidth = $("#viewport").width();
	
	$("#viewport").click(onViewPortClick);

	var numberOfViews = $("#slidecontainer").children().length;
	$("#slidecontainer").width(numberOfViews * viewportWidth);
	$("#slidecontainer").children().each(function() {
		$(this).width(viewportWidth);
	});
});


function slideViewport(index) {
	var pixelsToMove = (((index-1) * viewportWidth)*-1)-1;
	
    $("#slidecontainer").css("left", pixelsToMove);
	
}

function onViewPortClick(event) {
	
	var currentLeftValue =  parseInt($("#slidecontainer").css("left"));
	
    $("#slidecontainer").css("left", currentLeftValue-viewportWidth);
}

function onSelectView(event) {

}
