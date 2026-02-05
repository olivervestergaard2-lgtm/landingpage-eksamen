document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("productImage");
  const colorButtons = document.querySelectorAll(".color-thumb");
  const title = document.querySelector(".buy-box h1");

  if (!mainImage || !title || colorButtons.length === 0) return;

  const colorThemes = {
    "Dusty Rose": "#fde7ef",
    "Sky Blue": "#eef6ff",
    "Midnight Black": "#f1f1f1"
  };

  colorButtons.forEach(button => {
    button.addEventListener("click", () => {

      // 1. Fjern active fra alle
      colorButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // 2. Skift billede
      const newImage = button.dataset.img;
      if (newImage) {
        mainImage.src = newImage;
      }

      // 3. Skift titel (VIGTIGT: data-name)
      const colorName = button.dataset.name;
      if (colorName) {
        title.textContent = `LUMINA ONE – ${colorName}`;
      }

      // 4. (valgfrit) baggrundsskift – kan fjernes senere
      const buyPage = document.querySelector(".buy-page");
      if (buyPage && colorThemes[colorName]) {
        buyPage.style.background = colorThemes[colorName];
      }
    });
  });

  // Sørg for korrekt starttilstand
  const activeButton = document.querySelector(".color-thumb.active");
  if (activeButton) {
    activeButton.click();
  }
});


