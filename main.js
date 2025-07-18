const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
function openTripForm() {
  document.getElementById("tripModal").style.display = "flex";
}

function closeTripForm() {
  document.getElementById("tripModal").style.display = "none";
}

function submitTrip() {
  const name = document.getElementById("tripName").value.trim();
  const email = document.getElementById("tripEmail").value.trim();
  const destination = document.getElementById("tripDestination").value.trim();
  const date = document.getElementById("tripDate").value;

  if (!name || !email || !destination || !date) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thanks, ${name}! Your trip to ${destination} on ${date} has been submitted.`);

  // Reset form
  document.getElementById("tripModal").style.display = "none";
  document.getElementById("tripName").value = '';
  document.getElementById("tripEmail").value = '';
  document.getElementById("tripDestination").value = '';
  document.getElementById("tripDate").value = '';
}
document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;

  const query = new URLSearchParams({
    location: location,
    date: date
  }).toString();

  window.location.href = `search-results.html?${query}`;
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");
const bannerImages = Array.from(banner.children);

bannerImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});