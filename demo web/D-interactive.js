
/* =======================
preloading page
======================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");

  // small delay makes it feel smoother
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 300);
});

window.addEventListener("load", () => {
  document.body.style.overflow = "auto";
});


/* =======================
MAP OPEN / CLOSE
======================= */
const mapTrigger = document.querySelector('.map-trigger');
const mapBox = document.querySelector('.info-box');

mapTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  mapBox.classList.toggle('active');
  mapTrigger.classList.toggle('active');
});

mapBox.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!mapBox.contains(e.target) && !mapTrigger.contains(e.target)) {
    mapBox.classList.remove('active');
    mapTrigger.classList.remove('active');
  }
});

/* close menu when user starts dragging/clicking outside */
document.addEventListener('mousedown', (e) => {
  if (!mapBox.classList.contains('active')) return;

  if (!mapBox.contains(e.target) && !mapTrigger.contains(e.target)) {
    mapBox.classList.remove('active');
    mapTrigger.classList.remove('active');
  }
});

/* =======================
HAPPENINGS OPEN / CLOSE
======================= */
const happeningsTrigger = document.querySelector('.happenings-trigger');
const happeningsBox = document.querySelector('.happenings-box');

happeningsTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  happeningsBox.classList.toggle('active');
  happeningsTrigger.classList.toggle('active');
});

happeningsBox.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!happeningsBox.contains(e.target) && !happeningsTrigger.contains(e.target)) {
    happeningsBox.classList.remove('active');
    happeningsTrigger.classList.remove('active');
  }
});

/* close menu when user starts dragging/clicking outside */
document.addEventListener('mousedown', (e) => {
  if (!happeningsBox.classList.contains('active')) return;

  if (!happeningsBox.contains(e.target) && !happeningsTrigger.contains(e.target)) {
    happeningsBox.classList.remove('active');
    happeningsTrigger.classList.remove('active');
  }
});