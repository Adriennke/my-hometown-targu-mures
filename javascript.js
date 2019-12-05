//Hide nav bar when on the very top
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos >= currentScrollPos) {
        document.getElementById("main-nav").style.bottom = -100 + "px";
    } else {
        document.getElementById("main-nav").style.bottom = 0;
    }
    prevScrollpos = currentScrollPos;
} 