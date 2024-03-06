var blob = document.getElementById("large-blob");

setTimeout(function () {

    //Change the style.top to 50%, You can also do this in px
    blob.style.top = '50%';

    //Change the style.top to 50%, You can also do this in px
    blob.style.left = '50%';

    //Add the transform so it can be centered in the viewport
    blob.style.transform = 'translate(-50%,-50%)';

    //Add the timeout below in milliseconds.
}, 1000)