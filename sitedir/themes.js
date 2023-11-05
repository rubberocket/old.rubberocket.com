var theme = document.cookie.indexOf('theme=');
if (theme === "-1") { 
  console.log("Theme not set..."); 
  document.cookie = "theme=default"; 
  document.getElementById("body").class = "default"; 
  document.getElementsByTagName("a").class = "default"; 
} else {
  document.getElementById("body").class = theme; 
  document.getElementsByTagName("a").class = theme; 
}

function doit(){
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
