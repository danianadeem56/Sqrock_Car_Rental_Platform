document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("status").textContent =
    "Thank you! Your message has been received in this frontend demo.";
  e.target.reset();
});
document.getElementById("menuBtn").onclick = () =>
  document.getElementById("navLinks").classList.toggle("show");
