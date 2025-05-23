// Typewriter Effect
const typewriterText = "Abhishek Vaishya";
let index = 0;
function typeEffect() {
  if (index < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();

// Dark Mode Toggle
document.getElementById("darkModeBtn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Scroll to Top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Project Filter
const filterInput = document.getElementById("projectFilter");
const projectList = document.getElementById("projectList");
filterInput.addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const items = projectList.getElementsByTagName("li");
  for (let item of items) {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  }
});
