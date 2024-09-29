document.addEventListener("DOMContentLoaded", () => {
  const servicesMenu = document.querySelector(".services");
  const dropdown = document.querySelector(".dropdown");

  // Animation for dropdown effect
  servicesMenu.addEventListener("mouseover", () => {
    dropdown.style.transition = "opacity 0.3s ease";
    dropdown.style.opacity = 1;
  });

  servicesMenu.addEventListener("mouseout", () => {
    dropdown.style.transition = "opacity 0.3s ease";
    dropdown.style.opacity = 0;
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300); // Delay before hiding dropdown
  });
});


