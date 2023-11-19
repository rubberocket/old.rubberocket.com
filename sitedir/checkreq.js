//basic shit
var title = "<h1>Results</h1>";
var br = "<br>";
var letin = "http://www.rubberocket.com/home/";

//css
if(document.) {  
var css = "<font color='green'>CSS is supported!</font>";
}else {
var css = "<font color='red'>CSS is not supported!</font>";
}
//html5
if(navigator.geolocation){
var html5 = "<font color='green'>HTML5 is supported. Wow how original.</font>";
}else {
var html5 = "<font color='yellow'>HTML5 is not supported. This won't be much of an issue.</font>";
}
//let in?
if(css = false || css != true){
var button = "<button>no entry</button>";
}else {
var button = "<button onClick='window.location.href = letin;'>come in</button>";
}

function resultsAreIn() {
document.write("<style>html, body { background: #000; }</style>" + title + css + br + html5);
document.title = "The results are in!";
}
