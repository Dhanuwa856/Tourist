const moonIcon = document.getElementById("moon-icon");
const body = document.getElementsByTagName("body");

// const savedClassState = localStorage.getItem("classState");

// moonIcon.onclick = function () {
//   document.body.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     moonIcon.src = "Img/pngwing.com (8).png";
//   } else {
//     moonIcon.src = "Img/2682847_eclipse_forecast_moon_night_space_icon.png";
//   }
// };

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
