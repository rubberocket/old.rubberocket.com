//switch banners
function banner(whatisit,alt){
document.getElementById("logo_banner_header").src = "/resources/images/banners/rubberocket_banner_" + whatisit + ".gif";
document.getElementById("logo_banner_header").alt = alt;
document.getElementById("logo_banner_header").title = alt;
}
function bannerDemo(){
document.getElementById("logo_banner_header").src = "resources/images/banners/rubberocket_banner_" + "america" + ".gif";
document.getElementById("logo_banner_header").alt = "America's favorite rubberocket banner!";
document.getElementById("logo_banner_header").title = "America's favorite rubberocket banner!";
}

// check for holidays
var aprilFools = {
month: 3,
date: 1
}
var fourthOfJuly = {
month: 6,
date: 4
}
var allHallowsEve = {
month: 9,
date: 31
}
var newYear = {
month: 0,
date: 1
}
var inarguation = {
month: 0,
date: 12
}
var patricks = {
month: 2,
date: 17
}
var nineElevenDay = {
month: 8,
date: 11
}
function itsAprilFoolDay() {
  var now = new Date();
  return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
}
function itsFourthOfJuly() {
  var now = new Date();
  return (now.getMonth() == fourthOfJuly.month && now.getDate() == fourthOfJuly.date);
}
function itsInaugurationDay() {
  var now = new Date();
  return (now.getMonth() == inarguation.month && now.getDate() == inarguation.date);
}
function its911() {
  var now = new Date();
  return (now.getMonth() == nineElevenDay.month && now.getDate() == nineElevenDay.date);
}
function itsStPat() {
  var now = new Date();
  return (now.getMonth() == patricks.month && now.getDate() == patricks.date);
}
function itsHalloween() {
  var now = new Date();
  return (now.getMonth() == allHallowsEve.month && now.getDate() == allHallowsEve.date);
}
// get this to work
if (itsAprilFoolDay()) {
banner("fools","April fools! From rubberocket.");
console.log("Fuck you");
} else if (itsFourthOfJuly() || itsInaugurationDay()){
banner("america","America's favorite rubberocket banner!");
console.log("America!!!");
} else if (its911()) {
banner("911","rubberocket will NEVER FORGET.");
console.log("I will never forget");
} else if (itsStPat()) {
banner("patricks","rubberocket, where even the little guy in this banner is wearing green. And what exactly are YOU wearing?!");
console.log("green");
} else if(itsHalloween()) {
banner("halloween","Happy Halloween!");
console.log("BOO");
} else {
//no
}
