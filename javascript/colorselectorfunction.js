var x = 0, y = 0, z = 0,
color, r = "Red", g = "Green", b = "Blue";

function getColor() {
  x = parseInt(document.getElementById("red").value);
  document.getElementById("divRed").innerHTML = 'Red = ' + x;
  y = parseInt(document.getElementById("green").value);
  document.getElementById("divGreen").innerHTML = 'Green = ' + y;
  z = parseInt(document.getElementById("blue").value);
  document.getElementById("divBlue").innerHTML = 'Blue = ' + z;
  
  var color = "#"+rgbToHex(x,y,z)
  var color1 = "#"+rgbToHex((x+50), (y+50), (z+50))
  var color2 = "#"+rgbToHex((x+15), (y+15), (z+15))
  var color3 = "#"+rgbToHex((x-25), (y-25), (z-25))
  
  document.getElementById("value").style.backgroundColor = color;
  document.getElementById("value1").style.backgroundColor = color1;
  document.getElementById("value2").style.backgroundColor = color2;
  document.getElementById("value3").style.backgroundColor = color3;
  
if (x>175||y>175||z>175) {
  document.getElementById("value").style.color = "#000";
  document.getElementById("value1").style.color = "#000";
  document.getElementById("value2").style.color = "#000";
  document.getElementById("value3").style.color = "#000";
}
  
else {
  document.getElementById("value").style.color = "#fff";
  document.getElementById("value1").style.color = "#fff";
  document.getElementById("value2").style.color = "#fff";
  document.getElementById("value3").style.color = "#fff";
}
  
  document.getElementById("value").innerHTML = color;
  document.getElementById("value1").innerHTML = color1;
  document.getElementById("value2").innerHTML = color2;
  document.getElementById("value3").innerHTML = color3;
}

function rgbToHex(R,G,B) {
  return toHex(R)+toHex(G)+toHex(B)
}

function toHex(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));
  return "0123456789ABCDEF".charAt((n-n%16)/16)
  + "0123456789ABCDEF".charAt(n%16);
}