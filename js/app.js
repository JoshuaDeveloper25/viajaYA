const menuResponsiveButtonHamburguer = document.getElementById("menuResponsiveButtonHamburguer");
const menuResponsiveButtonClose = document.getElementById("menuResponsiveButtonClose");
const menuResponsiveContent = document.getElementById("menuResponsiveContent");

menuResponsiveButtonClose.style.display = "none";

// Hamburguer Button
menuResponsiveButtonHamburguer.addEventListener("click", () => {
  menuResponsiveButtonClose.style.display = "block";
  menuResponsiveContent.style.display = "block";
  menuResponsiveButtonHamburguer.style.display = "none";
});

// Close Button
menuResponsiveButtonClose.addEventListener("click", () => {
  menuResponsiveButtonClose.style.display = "none";
  menuResponsiveContent.style.display = "none";
  menuResponsiveButtonHamburguer.style.display = "block";
});
