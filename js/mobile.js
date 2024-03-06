var biostack = document.getElementById("bio-content");
var biotitle = document.getElementById("bio-title");
var biop1 = document.getElementById("bio-p1");
var biop2 = document.getElementById("bio-p2");
var biop3 = document.getElementById("bio-p3");
var bioimg = document.getElementById("bio-img");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    biostack.style.flexDirection = "column";
    biotitle.style.fontSize = "1.4em";
    biop1.style.fontSize = "1em";
    biop2.style.fontSize = "1em";
    biop3.style.fontSize = "1em";
    biop1.style.margin = "0.5em 0";
    biop2.style.margin = "0.5em 0";
    bioimg.style.width = "60%";
    bioimg.style.paddingBottom = "2em";
} else {
    biostack.style.flexDirection = "row";
}