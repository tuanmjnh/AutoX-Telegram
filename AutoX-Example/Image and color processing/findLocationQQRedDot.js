if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    exit();
}
launchApp("QQ");
sleep(2000);
var img = captureScreen();
toastLog("Start looking for color");
var point = findColor(img, "#f64d30");
if (point) {
    toastLog("x = " + point.x + ", y = " + point.y);
} else {
    toastLog("could not find it");
}


