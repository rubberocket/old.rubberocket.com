//header

//inject code now
var header = document.getElementById("header");
header.innerHTML = '<div id="headerbg"><img src="https://rubberocket.com/images/rubberocket-logos/wordmark_white.gif" alt="rubberocket.com" height="20"> <a href="/home/">home</a> <a href="/downloads/">downloads</a> <a href="/videos/">videos</a> <a href="/games/">games</a> <a href="/about/">about</a> </div> </div> <div height="20" style="display: block;">';
header.style = 'overflow:hidden; display: block; position: fixed; width: 100%; top:0; background-color: black; color: #FFF;';
header.class = 'header';
document.getElementById("headerbg").style = "background-color: black; background: black;";
document.getElementById("headerbg").bgcolor = "#000";
//var footer = document.getElementById("footer");
//yeah it's pointless to change the footer
