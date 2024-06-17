if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    exit();
}
var img = captureScreen();
images.saveImage(img, "/sdcard/1.png");