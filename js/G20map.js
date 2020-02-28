var G20Image = document.getElementById("mainG20");

var imageArray = ["image/m2.jpg", "image/G20share.png"];

var imageIndex = 0;

function changeImage() {
    G20Image.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

var intervalHandle = setInterval(changeImage, 2500);
G20Image.onclick = function() {
    clearInterval(intervalHandle);
}