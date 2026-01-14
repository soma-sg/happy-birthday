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

  if (currentPage === 2) {
    launchConfetti(); // 🎉 last page
  }
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

/* ✍️ TYPING ANIMATION */
const text = "Happy Birthday Muddu Tangi...💝";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}

window.addEventListener("load", typeEffect);



/* 🎉 CONFETTI ON LAST PAGE */
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.top = "-10px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor =
      ["#ff5c8d", "#ffd166", "#06d6a0", "#3b82f6"][Math.floor(Math.random() * 4)];
    confetti.style.animation = "confettiFall 3s linear";
    confetti.style.zIndex = 999;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

/* Confetti animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes confettiFall {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
