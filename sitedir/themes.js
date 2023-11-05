function doit(){
var theme = document.cookie.indexOf('theme=');
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
  window.location.reload();
}
