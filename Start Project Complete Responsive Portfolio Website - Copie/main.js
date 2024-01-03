let nav_home = document.querySelector("#navhome a");
let nav_about = document.querySelector("#navabout a");
let nav_services = document.querySelector("#navservices a");
let nav_portfolio = document.querySelector("#navportfolio a");
let nav_contact = document.querySelector("#navcontact a");

nav_home.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

nav_about.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 694,
    behavior: "smooth",
  });
});

nav_services.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 1380,
    behavior: "smooth",
  });
});
nav_portfolio.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 2030,
    behavior: "smooth",
  });
});
nav_contact.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 2730,
    behavior: "smooth",
  });
});
