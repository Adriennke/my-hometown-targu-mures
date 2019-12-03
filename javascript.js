let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "21";
  } else {
    document.getElementById("navbar").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
