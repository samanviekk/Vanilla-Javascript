function showNav() {
  console.log("showing");
  document.querySelector(".nav__links").classList.toggle("show__links");
}

document.querySelector(".nav__btn").addEventListener("click", showNav);
