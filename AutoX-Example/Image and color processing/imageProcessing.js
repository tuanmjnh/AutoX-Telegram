"ui";

var url = "https://www.autojs.org/assets/uploads/files/1540386817060-918021-20160416200702191-185324559.jpg";
var logo = null;
var currentImg = null;

events.on("exit", function () {
    if (logo != null) {
        logo.recycle();
    }
    if (currentImg != null) {
        currentImg.recycle();
    }
});

ui.layout(
    <vertical>
        <img id="img" w="250" h="250" url="{{url}}" />
        <scroll>
            <vertical>
                <button id="rotate" text="Rotation" />
                <button id="concat" text="Splicing" />
                <button id="grayscale" text="Grayscale" />
                <button id="binary" text="Binarization" />
                <button id="adaptiveBinary" text="Adaptive Binarization" />
                <button id="hsv" text="RGB to HSV" />
                <button id="blur" text="Vague" />
                <button id="medianBlur" text="Median Filter" />
                <button id="gaussianBlur" text="Gaussian Blur" />
            </vertical>
        </scroll>
    </vertical>
);

//Set an image to the image control
function setImage(img) {
    ui.run(() => {
        ui.img.setImageBitmap(img.bitmap);
        var oldImg = currentImg;
        //The currentImg cannot be recycled immediately because the img control is still using it and should be recycled in the next message loop.
        ui.post(() => {
            if (oldImg != null) {
                oldImg.recycle();
            }
        });
        currentImg = img;
    });
}

//Start a thread to process images
var imgProcess = threads.start(function () {
    setInterval(() => { }, 1000);
});

//The function that processes the image assigns the task to the image processing thread
function processImg(process) {
    imgProcess.setTimeout(() => {
        if (logo == null) {
            logo = images.load(url);
        }
        //Processing images
        var result = process(logo);
        //Set the processed image to the image control
        setImage(result);
    }, 0);
}

var degress = 0;

ui.rotate.on("click", () => {
    processImg(img => {
        degress += 90;
        //Rotation degress angle
        return images.rotate(img, degress);
    });
});

ui.concat.on("click", () => {
    processImg(img => {
        if (currentImg == null) {
            toast("Please click other buttons first, then click this button");
            return img.clone();
        }
        //Splice currentImg to the right of img
        return images.concat(img, currentImg, "right");
    });
});

ui.grayscale.on("click", () => {
    processImg(img => {
        //Grayscale
        return images.grayscale(img);
    });
});

ui.binary.on("click", () => {
    processImg(img => {
        var g = images.grayscale(img);
        //Binarization, taking images with grayscale between 30 and 200
        var result = images.threshold(g, 100, 200);
        g.recycle();
        return result;
    });
});

ui.adaptiveBinary.on("click", () => {
    processImg(img => {
        var g = images.grayscale(img);
        //Adaptive binarization, maximum value is 200, block size is 25
        var result = images.adaptiveThreshold(g, 200, "MEAN_C", "BINARY", 25, 10);
        g.recycle();
        return result;
    });
});

ui.hsv.on("click", () => {
    processImg(img => {
        //RGB to HSV
        return images.cvtColor(img, "BGR2HSV");
    });
});

ui.blur.on("click", () => {
    processImg(img => {
        //Vague
        return images.blur(img, [10, 10]);
    });
});

ui.medianBlur.on("click", () => {
    processImg(img => {
        //Median Filter
        return images.medianBlur(img, 5);
    });
});

ui.gaussianBlur.on("click", () => {
    processImg(img => {
        //Gaussian Blur
        return images.gaussianBlur(img, [5, 5]);
    });
});