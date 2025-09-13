// Footer year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Toggle icon between ☰ and X
  if (hamburger.textContent === "☰" || hamburger.textContent === "≡") {
    hamburger.textContent = "✖"; // X
  } else {
    hamburger.textContent = "☰"; // hamburger
  }
});





