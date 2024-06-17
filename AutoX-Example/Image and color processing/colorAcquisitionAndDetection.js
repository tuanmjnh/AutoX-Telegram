if (!requestScreenCapture()) {
   toast("Screenshot request failed");
   exit
}
sleep(2000);
var x = 760;
var y = 180;
//Get the color at point (x, y)
var c = images.pixel(captureScreen(), x, y);
//Show this color
var msg = "";
msg += "In Location(" + x + ", " + y + ")The color at" + colors.toString(c);
msg += "\nR = " + colors.red(c) + ", G = " + colors.green(c) + ", B = " + colors.blue(c);
//Check if the color #73bdb6 is at the point (x, y) (fuzzy comparison)
var isDetected = images.detectsColor(captureScreen(), "#73bdb6", x, y);
msg += "\nDoes the position match the color? #73bdb6: " + isDetected;
alert(msg);