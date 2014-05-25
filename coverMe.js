var coverMe = {};
coverMe.key = "AIzaSyAZ6GmtJMCZA74rCfkUaxvf0b0vC7N85_k";

//put in here all the things you want to do right 
//at the very beginning

coverMe.init = function() {
	$("#submit").on("click", function(e){
		e.preventDefault();
		var searchInput = $("#search").val();
		var inputWithCover = searchInput + " cover";
		console.log(inputWithCover);
		//run the various functions with inputWithCover 
		//as the parameter you pass said functions if needed
		coverMe.changeDisplay();
		coverMe.getVideo(inputWithCover);

	});
};


//put all your other functions here

coverMe.getVideo = function(query){
	//ajax or whatever here
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "https://gdata.youtube.com/feeds/api/videos",
		data: {
			alt: "json",
			key: coverMe.key,
			q: query,
			"start-index":1,
			"max-results": 1,
			v:2,
			orderby:"viewCount"
		},
		success: function(result){
			debugger;
		}
	});
};

coverMe.changeDisplay = function(){
	$("body").css("background-color", "#222");
	$(".main p, .main form").css("display", "none");
	$(".main .videoBox").css({
		"display": "block",
		"margin": "0 auto"
	});
};


//initialize app with jQuery

$(function(){
	coverMe.init();
});

//PSEUDO CODE:
//user types in song title. User presses submit. **DONE**
//Take the string user subitted, concat " cover" on to it **DONE**
//pull results from youtube for that string
//find the most viewed video from those results
//display the resulting single video in the <section> div,
//hide what was there before, **DONE**
//and make the background color of the site fade to black. **DONE**
//include a button at the bottom of the resulting video
//that allows user to restart the process