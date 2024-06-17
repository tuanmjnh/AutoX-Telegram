if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    exit();
}
var img = captureScreen();
//0x9966ff is the color of the editor's purple font
toastLog("Start looking for color");
var point = findColor(img, 0x9966ff);
if (point) {
    toastLog("x = " + point.x + ", y = " + point.y);
} else {
    toastLog("could not find it");
}


