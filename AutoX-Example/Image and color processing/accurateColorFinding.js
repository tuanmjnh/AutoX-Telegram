if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    stop();
}
var img = captureScreen();
toastLog("Start looking for color");
//0x1d75b3 is the color of the editor's default theme blue font (keywords such as if, var, etc.)
//Find the color that is exactly equal to 0x1d75b3
var point = findColorEquals(img, 0x006699);
if (point) {
    toastLog("x = " + point.x + ", y = " + point.y);
} else {
    toastLog("could not find it");
}


