// if it isn't safe...
function notsafe() {
function setTheme(){
  alert("Internet Explorer doesn't like getElementById... don't use it!");
}
}

//method 1
if (window.document.documentMode) {
notsafe();
}

//method 2
var ua = window.navigator.userAgent;
var isIE = /MSIE|Trident|Edge\//.test(ua);
if (isIE) {
notsafe();
}

//method 3
function reallyIsIE() {
    var ua = window.navigator.userAgent;
    var crappyIE = false;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {// IE 10 or older => return version number        
        crappyIE = true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {// IE 11 => return version number        
        crappyIE = true;
    }
    return crappyIE;
}

if(!reallyIsIE()) {
console.log("good job");
}else {
notsafe();
}

if (navigator.cookieEnabled) {
  let theme = document.cookie.indexOf('theme=');
  //detect if theme was previously changed
  console.log(theme);
  function setTheme(){
  if (theme === "-1") {
  console.log("Theme not set...");
  document.cookie = "theme=default";
  document.getElementById("body").class = "default";
  document.getElementsByTagName("a").class = "default";
  }
  if (theme === "default") {
  document.cookie = "theme=light";
  document.getElementById("body").class = "light";
  document.getElementsByTagName("a").class = "light";
  }
  if (theme === "light") {
  document.cookie = "theme=geocities";
  document.getElementById("body").class = "geocities";
  document.getElementsByTagName("a").class = "";
  }
  if (theme === "geocities") {
  document.cookie = "theme=default";
  document.getElementById("body").class = "default";
  document.getElementsByTagName("a").class = "default";
  }
  }
} else {
  function setTheme(){
  alert("Enable your cookies, dumbass!\nFrom: setTheme();");
  }
}
