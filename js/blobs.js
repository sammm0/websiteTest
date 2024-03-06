var lblob = document.getElementById("large-blob");
var sblob = document.getElementById("small-blob");

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function movesBlob() {

    // Change the style.top and style.left to random values
    sblob.style.top = getRandomInt(20, 30) + 'vw';
    sblob.style.left = getRandomInt(48, 65) + 'vw';

    // Add the transform so it can be centered in the viewport
    // blob.style.transform = 'translate(-50%,-50%)';

    // Call moveBlob again after a certain delay

    var stime = getRandomInt(2000, 5000);

    setTimeout(movesBlob, stime);
}

function movelBlob() {

    // Change the style.top and style.left to random values
    lblob.style.top = getRandomInt(19, 30) + 'vw';
    lblob.style.left = getRandomInt(49, 65) + 'vw';

    // Add the transform so it can be centered in the viewport
    // blob.style.transform = 'translate(-50%,-50%)';

    // Call moveBlob again after a certain delay

    var ltime = getRandomInt(2000, 5000);

    setTimeout(movelBlob, ltime);
}

// Start the motion
movesBlob();
movelBlob();