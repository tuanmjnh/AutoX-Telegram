//Compressed file path (must be a full path)
var filePath = "/sdcard/Script.7z";
//Directory path (must be a full path)
var dirPath = "/sdcard/Screenplay";
//Compression Type
//Supported compression types include: zip 7z bz2 bzip2 tbz2 tbz gz gzip tgz tar wim swm xz txz。
var type = "7z";
//Compression Cipher
var password = "password"

//7z Encryption compression (skip if file already exists)
//zips.A(type, filePath, dirPath, password)

//compression
switch (zips.A(type, filePath, dirPath)) {
    case 0:
        toastLog("Compression successful! The file has been saved as: " + filePath)
        break;
    case 1:
        toastLog("Compression finished with non-fatal errors (e.g. some files are in use and not compressed)")
        break;
    case 2:
        toastLog("Fatal Error")
        break;
    case 7:
        toastLog("Command line error")
        break;
    case 8:
        toastLog("Not enough memory")
        break;
    case 255:
        toastLog("User aborted the operation")
        break;
    default: toastLog("unknown mistake")
}
