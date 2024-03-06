var biostack = document.getElementById("bio-content");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    biostack.style.flexDirection = "column";
} else {
    biostack.style.flexDirection = "row";
}