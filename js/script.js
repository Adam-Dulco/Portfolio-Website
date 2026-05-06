/* MOBILE NAVIGATION */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

/* ADD CURRENT YEAR TO FOOTER */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
