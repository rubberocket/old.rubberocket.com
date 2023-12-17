window.addEventListener("load", function() {
//easter egg link
var rrlogo = document.getElementById("rrlogo");
var clickhere = document.getElementById("clickhere");

//crt
var crt = document.getElementById("crt");

//easter egg
function easterEggScreen(){
crt.src = '/images/nav_crt_nicetry.png';
}

function easterEgg(){
//no
}

function changeScreenToHomePage(){
crt.src = "/images/nav_crt_main.png";
}

function goHome(){
window.location.href = "/home/";
}

//reverts CRT Screen back to normal
function revertCRT(){
crt.src = '/images/nav_crt_static.gif';
}

//easter egg
rrlogo.addEventListener("mouseover", easterEggScreen);
rrlogo.addEventListener("click", easterEgg);
rrlogo.addEventListener("mouseout", revertCRT);

//crt
crt.addEventListener("mouseover", changeScreenToHomePage);
crt.addEventListener("click", goHome);
crt.addEventListener("mouseout", revertCRT);

//clickhere
clickhere.addEventListener("mouseover", changeScreenToHomePage);
clickhere.addEventListener("click", goHome);
clickhere.addEventListener("mouseout", revertCRT);
});