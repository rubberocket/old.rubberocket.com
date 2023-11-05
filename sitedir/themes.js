var theme = document.cookie.indexOf('theme=');
document.getElementsByTagName("body").class = theme; 
document.getElementsByTagName("a").class = theme; 

function doit(){
    var themeselected = prompt("What theme do you want? \n Options are: dark, light and geocities. type in the one you want in lowercase.";
    document.cookie = "theme=" + themeselected; 
    var theme = document.cookie.indexOf('theme=');
    document.getElementsByTagName("body").class = "light"; 
    document.getElementsByTagName("a").class = "light"; 
}
