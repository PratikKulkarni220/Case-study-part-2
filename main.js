camera= document.getElementById("div1");

Webcam.set({
    width:400,
    height:500,
    image_format: 'png',
    png_quality:99,

});

Webcam.attach('#div1')