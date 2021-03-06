const open = document.getElementById("open-btn");
const tau = document.getElementById("tau");
const close = document.getElementById("close-btn");
const container = document.getElementById("container");
const tauContainer = document.getElementById("tau-container");
const audio = document.getElementById("audio");
const closeTau = document.getElementById("close-tau");
tau.addEventListener("click", () => {
  tauContainer.classList.add("tau");
});
closeTau.addEventListener("click", () => {
  tauContainer.classList.remove("tau");
});
open.addEventListener("click", () => {
  container.classList.add("active");
  setInterval(createHeart, 200);
  audio.play();
});
close.addEventListener("click", () => {
  container.classList.remove("active");
  audio.pause();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.innerText = "💜";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
