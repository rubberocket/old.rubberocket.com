window.addEventListener("load", function() {
//video player

//get id
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoid = urlParams.get('videoID');

//get divs.
var video = document.getElementById("videourl");
var titlebox = document.getElementById("videotitle");
var descriptionbox = document.getElementById("videodescription");
var datebox = document.getElementById("videodatefinished");
var ogfilenamebox = document.getElementById("videofilename");

//set video
if (videoid === "notgameplay2017"){
console.log(videoid);
const description = "Quote-unquote Roblox gameplay from a bygone era. I don't even move my avatar in this one, I just listen to the copyrighted music. Still waiting for Disney to sue me.";
const title = "Ducktales Reboot Roblox Gameplay";
const date = "11/24/2017"
const originalfilename = "robloxapp-20171124-1732404.mp4 (renamed to roblox2017.mp4)"
const videourl = "https://leopard.hosting.pecon.us/dl/dshqs/roblox2017.mp4";

//video info!!
titlebox.innerHTML = title;
descriptionbox.innerHTML = description;
datebox.innerHTML = date;
ogfilenamebox.innerHTML = originalfilename;
video.src = videourl;
}

});
