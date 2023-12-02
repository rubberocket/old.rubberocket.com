//header

//inject code now
var header = document.getElementById("header");
header.innerHTML = '<div class="logo"></div> <div class="navlink"><a href="/home/"><i class="fa-solid fa-house"></i></a> <a href="/downloads/"><i class="fa-solid fa-download"></i></a> <a href="/videos/"><i class="fa-solid fa-video"></i></a> <a href="/games/"><i class="fa-solid fa-gamepad"></i></a> <a href="/about/"><i class="fa-solid fa-question"></i></a> </div> </div> <div height="20" style="display: block;">';
//var footer = document.getElementById("footer");
//yeah it's pointless to change the footer
//except for this.
var translator = "<script> function googleTranslateElementInit() { new google.translate.TranslateElement( //here you add the supported languages like en, es, zh, nl, de, etc. {pageLanguage: 'en'}, 'google_translate_element' ); } </script> <script src=" + '"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"' + '></script> <div id="google_translate_element"></div>'
var footer = document.getElementById("footer);
footer.innerHTML = footer.innerHTML + "<br>" + translator;
