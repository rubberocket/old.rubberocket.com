window.addEventListener("load", function() {

var videotag = document.getElementById("vidvideo");
var videodownload = document.getElementById("videodownload");

//getvideoid
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoid = urlParams.get('videoid');

if (videoid === "rbgameplay") {
videotag.innerHTML = "<video width='640' height='360' controls id='thevideo'><source src='https://leopard.hosting.pecon.us/dl/wdkbe/roblox2017.mp4' type='video/mp4'></video>";
}

});