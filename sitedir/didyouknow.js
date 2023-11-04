//get tips
var tip = new Array(10);
tip[1]="There's subcategories in the sidebar over there... try clicking them and see what happens!";
tip[2]="This site should work in Internet Explorer 3... not sure about 2 or 1, it just shows a 404! :(";
tip[3]="This is a static site... which explains why there's no account system! There never will... never...";
tip[4]="You suck.";
tip[5]="You know how Adobe states that downloading old versions is illegal? It's true... if you don't have a physical copy on you. Wink wink. ;)";
tip[6]="We're unfunny... and so are you.";
tip[7]="no.";
tip[8]="Dynadot sells domains for cheap! This domain costed $7.99 with a coupon! It's a fucking steal!";
tip[9]="Blender's a thing." + ' <a href="https://www.blender.org">Get it!</a>';
tip[10]="If you're a gen alpha and you don't know what we're talking about, <a href=" +  '"https://wikipedia.org"' + ">Wikipedia exists</a>.";
tip[11]="You're using" + navigator.userAgent + ".";

var y=Math.round(Math.random()*11)%11+1;
document.write(tip[y]);
