var theme = document.cookie.indexOf('theme=');
document.getElementsByTagName("body").class = theme; 
document.getElementsByTagName("a").class = theme; 

function doit(){
  if (theme === "default") { 
    document.cookie = "theme=light"; 
    document.getElementsByTagName("body").class = "light"; 
    document.getElementsByTagName("a").class = "light"; 
  } 
  if (theme === "light") { 
    document.cookie = "theme=geocities"; 
    document.getElementsByTagName("body").class = "geocities"; 
    document.getElementsByTagName("a").class = ""; 
  } 
  if (theme === "geocities") { 
    document.cookie = "theme=default"; 
    document.getElementsByTagName("body").class = "default"; 
    document.getElementsByTagName("a").class = "default"; 
  } 
}
