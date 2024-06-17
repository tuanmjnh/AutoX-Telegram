if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    exit();
}
var img = captureScreen();
//0xffffff为白色
toastLog("Start looking for color");
//Specify to search for color in the area with width and height of 900*1000 at position (90, 220).
//0xff00cc Is the editor's dark pink font (string) color
var point = findColor(img, "#ff00cc", {
    region: [90, 220, 900, 1000],
    threads: 8
});
if (point) {
    toastLog("x = " + point.x + ", y = " + point.y);
} else {
    toastLog("could not find it");
}
