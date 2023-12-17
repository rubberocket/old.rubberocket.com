window.addEventListener("load", function() {
//easter egg link
var rrlogo = document.getElementById("rrlogo");

//crt
var crt = document.getElementById("crt");

//links
var videos = document.getElementById("videolink");
var games = document.getElementById("gameslink");
var about = document.getElementById("aboutlink");
var email = document.getElementById("emaillink");
var extras = document.getElementById("extraslink");

//easter egg
function easterEggScreen(){
crt.src = '../images/nav_crt_main.png';
}

function easterEgg(){
alert("A confidante is you!");
alert("search up what that means, will ya?");
}

function changeScreenToVideos(){
crt.src = "../images/nav_crt_videos.png";
}
function changeScreenToGames(){
crt.src = "../images/nav_crt_games.png";
}
function changeScreenToAbout(){
crt.src = "../images/nav_crt_about.png";
}
function changeScreenToEmail(){
crt.src = "../images/nav_crt_email.png";
}
function changeScreenToExtras(){
crt.src = "../images/nav_crt_extra.png";
}

//reverts CRT Screen back to normal
function revertCRT(){
crt.src = '../images/nav_crt.png';
}

//easter egg
rrlogo.addEventListener("mouseover", easterEggScreen);
rrlogo.addEventListener("click", easterEgg);
rrlogo.addEventListener("mouseout", revertCRT);

//links
videos.addEventListener("mouseover", changeScreenToVideos);
games.addEventListener("mouseover", changeScreenToGames);
about.addEventListener("mouseover", changeScreenToAbout);
email.addEventListener("mouseover", changeScreenToEmail);
extras.addEventListener("mouseover", changeScreenToExtras);

//linksmouseout
videos.addEventListener("mouseout", revertCRT);
games.addEventListener("mouseout", revertCRT);
about.addEventListener("mouseout", revertCRT);
email.addEventListener("mouseout", revertCRT);
extras.addEventListener("mouseout", revertCRT);
});