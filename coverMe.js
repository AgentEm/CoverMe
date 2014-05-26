var coverMe = {};
coverMe.key = "AIzaSyAZ6GmtJMCZA74rCfkUaxvf0b0vC7N85_k";

//put in here all the things you want to do right 
//at the very beginning

coverMe.init = function() {
	$("#submit").on("click", function(e){
		e.preventDefault();
		var searchInput = $("#search").val();
		var inputWithCover = searchInput + ' cover';
		coverMe.changeDisplay();
		coverMe.getVideo(inputWithCover);
		coverMe.displayVideo();
	});
};


//put all your other functions here

coverMe.getVideo = function(query){
	//ajax or whatever here
	$.ajax({
		type: "GET",
		url: "https://www.googleapis.com/youtube/v3/search",
		data: {
			v:3,
			q: query,
			part: "snippet",
			type: "video",
			videoEmbeddable: "true",
			maxResults: 1,
			key: coverMe.key
		},
		success: function(result){
			var theVideoURL = result.items[0].id.videoId;
			coverMe.displayVideo(theVideoURL);
		}
	});
};

coverMe.changeDisplay = function(){
	$("body").css("background-color", "#222");
	$(".main").css("padding", "5% 0");
	$(".main p, .main form").css("display", "none");
	$(".main .videoBox").css({
		"display": "block",
		"margin": "0 10%"
	})
	$(".videoBtn").css({
		"display":"inline-block",
		"margin-top": "3%",
		"border":"5px solid #BD1550"
	})
	$(".videoBtn a").css({
		"color":"#490A3D",
		"text-decoration":"none",
		"display":"inline-block",
		"padding":"1em"
	});
};

coverMe.displayVideo = function(data){
	$(".videoBox").html(
		'<object width="100%" height="570"><param name="movie" value="https://www.youtube.com/v/'+data+'?version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="https://www.youtube.com/v/'+data+'?version=3" type="application/x-shockwave-flash" width="100%" height="570" allowscriptaccess="always" allowfullscreen="true"></embed></object>'
	);
};

//initialize app with jQuery

$(function(){
	coverMe.init();
});

//PSEUDO CODE:
//user types in song title. User presses submit. **DONE**
//Take the string user subitted, concat " cover" on to it **DONE**
//pull results from youtube for that string **DONE**
//find the most viewed video from those results**DONE**
//display the resulting single video in the videoBox div,
//hide what was there before, **DONE**
//and make the background color of the site fade to black. **DONE**
//include a button at the bottom of the resulting video
//that allows user to restart the process