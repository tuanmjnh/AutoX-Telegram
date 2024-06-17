if (!requestScreenCapture()) {
    toast("Screenshot request failed");
    exit();
}
var img = captureScreen();
toastLog("Start looking for color");
//Specify to search for color in the area with a width and height of 400*400 at position (100, 220).
//#75438a It is the brown-red font (number) color of the editor's default theme, located approximately at "2000" on line 5, with coordinates of approximately (283, 465)
var point = findColorInRegion(img, "#75438a", 90, 220, 900, 1000);
if (point) {
    toastLog("x = " + point.x + ", y = " + point.y);
} else {
    toastLog("could not find it");
}


