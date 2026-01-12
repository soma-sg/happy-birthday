let pages = document.querySelectorAll(".page");
let currentPage = 0;

pages[currentPage].style.display = "flex";

/* 🎵 Start music safely on user interaction */
function startCelebration() {
  document.getElementById("bg-music").play();
  nextPage();
}

function nextPage() {
  pages[currentPage].style.display = "none";
  currentPage++;
  pages[currentPage].style.display = "flex";
}

/* HEART RAIN */
const heartContainer = document.getElementById("heart-rain");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 12 + Math.random() * 24 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 120);
