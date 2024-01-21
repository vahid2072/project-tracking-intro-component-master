// Navbar
const closeBtn = document.querySelector(".close-button");
const openNavBtn = document.querySelector(".open-button"); 

function openNav() {
  document.getElementById("myNav").style.width = "84%";
  openNavBtn.style.display = "none";
  closeBtn.style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  closeBtn.style.display = "none";
  openNavBtn.style.display = "block";
}