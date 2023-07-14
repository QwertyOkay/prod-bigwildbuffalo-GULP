let prevScrollPosition = window.pageYOffset;

window.onscroll = function () {

  let currentScrollPosition = window.pageYOffset;

  if (prevScrollPosition > currentScrollPosition) {

    document.querySelector("header").style.display = "block";
  } else {
    document.querySelector("header").style.display = "none";
  }
  prevScrollPosition = currentScrollPosition;
}