//Compressed file path (must be a full path)
var filePath = files.path("./bonus.rar");
//Directory path (must be a full path)
var dirPath = "/sdcard/Screenplay";
//Compression Cipher
var password = "password"

//Supported decompression types include：zip、7z、bz2、bzip2、tbz2、tbz、gz、gzip、tgz、tar、wim、swm、xz、txz以及rar、chm、iso、msi等众多格式。
//Unzip the unencrypted compressed file (skip if the file already exists)
//zips.X(filePath, dirPath)

//Decompress the encrypted compressed package (skip if the file already exists)
switch (zips.X(filePath, dirPath, password)) {
    case 0:
        toastLog("Decompression successful! Please check the " + dirPath + " directory.")
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
