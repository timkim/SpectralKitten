var views;
var viewportWidth;
var spectralKitten;

$(document).ready(function() {
	$("#set_list").list();
    $("#list_container").bind('change',function(e) {
        $(".listholder").html("Shown");
        $(".listholder").css("display","block");
        $(".listholder").css("left",0);
    });
	$(".nav").click(function(event) {
		$(".active").removeClass("active");
		$(event.target).parent().addClass("active");
		slideViewport($(event.target).data().view);
	});
	
    $(".viewcontainer").removeClass("viewhidden");
    
    viewportWidth = $("#viewport").width();

	var numberOfViews = $("#slidecontainer").children().length;
	$("#slidecontainer").width(numberOfViews * viewportWidth);
	$("#slidecontainer").children().each(function() {
		$(this).width(viewportWidth);
	});
	
	spectralKitten = new SpectralKitten("/api/");
	
	spectralKitten = new SpectralKitten();
	spectralKitten.apiVersionName = "version.json";
	spectralKitten.apiCardsName = "all_cards.json";
	
	spectralKitten.initializeData(
		function() {
			var source = $('#series-list-template').html();
			var template = Handlebars.compile(source);

			var context = {"series": spectralKitten.series};
			var html = template(context);
			
			$('#list_container').html(html);
			
			$('#series_list_container').list();
			
			/*
			$('#myList').bind(
				"change",
				function( event ){
					console.log(event);
				}
			);
			*/
			
			/*
			s.checkForUpdates(
				function(newDataFound, data){
					console.log("New data found? : " + newDataFound);
				},
				function (error){
					console.log("error checking for data update");
				},
				true //auto update if there is new data
			);
			*/
		},
		function(error) {
			console.log('could not initialize data');
		},
		true /* force loading of data from server*/
	);
	
});


function slideViewport(index) {
	var pixelsToMove = (((index-1) * viewportWidth)*-1)-1;
	
    $("#slidecontainer").css("left", pixelsToMove);
	
}

function onSelectView(event) {

}
