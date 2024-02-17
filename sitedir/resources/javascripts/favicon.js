if (navigator.geolocation){
    isSupported = true;
}
else {
    isSupported = false;
}

if (isSupported = true) {
    document.getElementById("faviconer").href = "/favicon_anim.svg";
} else {
    //do nothing
}