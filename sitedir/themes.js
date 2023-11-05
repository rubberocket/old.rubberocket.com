if (navigator.cookieEnabled) {
  let theme = document.cookie.indexOf('theme=');
  //detect if theme was previously changed
  console.log(theme);
  function setTheme(){
  if (theme === "-1") {
  console.log("Theme not set...");
  document.cookie = "theme=default";
  document.getElementById("body").class = "default";
  }
  if (theme === "default") {
  document.cookie = "theme=light";
  document.getElementById("body").class = "light";
  }
  if (theme === "light") {
  document.cookie = "theme=geocities";
  document.getElementById("body").class = "geocities";
  }
  if (theme === "geocities") {
  document.cookie = "theme=default";
  document.getElementById("body").class = "default";
  }
  }
} else {
  function setTheme(){
  alert("Enable your cookies, dumbass!\nFrom: setTheme();");
  }
}
