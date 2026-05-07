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

/*================*/
/*  IMAGE OPENER  */
/*================*/

const certificateImages = document.querySelectorAll(
  ".skill-badges img:not(.no-img-opener)",
);

const imageOpener = document.getElementById("image-opener");
const imageOpenerImg = document.getElementById("image-opener-img");
const imageOpenerClose = document.getElementById("image-opener-close");

certificateImages.forEach((image) => {
  image.addEventListener("click", () => {
    imageOpener.classList.add("active");
    imageOpenerImg.src = image.src;
    imageOpenerImg.alt = image.alt;
    document.body.style.overflow = "hidden";
  });
});

imageOpenerClose.addEventListener("click", closeImageOpener);

imageOpener.addEventListener("click", (e) => {
  if (e.target === imageOpener) {
    closeImageOpener();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImageOpener();
  }
});

function closeImageOpener() {
  imageOpener.classList.remove("active");
  document.body.style.overflow = "";
}
