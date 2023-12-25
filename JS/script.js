const moonIcon = document.getElementById("moon-icon");
const body = document.getElementsByTagName("body");

document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the class state from localStorage
  const savedClassState = localStorage.getItem("classState");

  // Apply the class if it was previously saved
  if (savedClassState) {
    document.getElementById("body").classList.add(savedClassState);
  }

  // Add click event listener to the button
  document.getElementById("moon-icon").addEventListener("click", function () {
    const element = document.getElementById("body");

    // Toggle the class
    element.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      moonIcon.src = "Img/pngwing.com (8).png";
    } else {
      moonIcon.src = "Img/2682847_eclipse_forecast_moon_night_space_icon.png";
    }

    // Save the class state to localStorage
    const classState = element.classList.contains("dark-mode")
      ? "dark-mode"
      : "";
    localStorage.setItem("classState", classState);
  });
});

// Nav bar position fixed

function handleStickyNav() {
  const header = document.querySelector(".header-contact");
  const navbar = document.querySelector(".nav-bar");

  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

// Add an event listener for scrolling
window.addEventListener("scroll", handleStickyNav);

// Initial setup
handleStickyNav();

const cardAs = document.querySelectorAll(".card-a");
const cardBs = document.querySelectorAll(".card-b");
const cardCs = document.querySelectorAll(".card-c");
const cardDs = document.querySelectorAll(".card-d");
const img01s = document.querySelectorAll(".img01");
const img02s = document.querySelectorAll(".img02");
const img03s = document.querySelectorAll(".img03");
const img04s = document.querySelectorAll(".img04");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    if (intersecting) {
      entry.target.classList.add("transform0");
      entry.target.classList.add("see");

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("transform0");
      entry.target.classList.remove("see");
    }
  });
}, options);

cardAs.forEach((cardA) => {
  observer.observe(cardA);
});
cardBs.forEach((cardB) => {
  observer.observe(cardB);
});
cardCs.forEach((cardC) => {
  observer.observe(cardC);
});
cardDs.forEach((cardD) => {
  observer.observe(cardD);
});
img01s.forEach((img01) => {
  observer.observe(img01);
});
img02s.forEach((img02) => {
  observer.observe(img02);
});
img03s.forEach((img03) => {
  observer.observe(img03);
});
img04s.forEach((img04) => {
  observer.observe(img04);
});

// nav bar

const openMenu = document.getElementById("open-icon");
const closeMenu = document.getElementById("close-icon");
const navMenu = document.getElementById("nav-menu");

openMenu.addEventListener("click", function () {
  navMenu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "flex";
});
closeMenu.addEventListener("click", function () {
  navMenu.style.display = "none";
  openMenu.style.display = "flex";
  closeMenu.style.display = "none";
});
