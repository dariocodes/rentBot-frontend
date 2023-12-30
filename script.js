// Show input changes on form
document.addEventListener("DOMContentLoaded", function () {
  const telegramUsername = document.getElementById("telegramUsername");
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");
  const minSize = document.getElementById("minSize");
  const maxSize = document.getElementById("maxSize");
  const priceRange = document.getElementById("priceRange");
  const sizeRange = document.getElementById("sizeRange");

  function updatePriceRange() {
    priceRange.textContent = `€${minPrice.value} - €${maxPrice.value}`;
  }

  function updateSizeRange() {
    sizeRange.textContent = `${minSize.value}m² - ${maxSize.value}m²`;
  }

  // Function to ensure '@' at the start of the Telegram username
  function ensureAtSymbol() {
    if (telegramUsername.value && !telegramUsername.value.startsWith("@")) {
      telegramUsername.value = "@" + telegramUsername.value;
    }
  }

  telegramUsername.addEventListener("input", ensureAtSymbol);
  minPrice.addEventListener("input", updatePriceRange);
  maxPrice.addEventListener("input", updatePriceRange);
  minSize.addEventListener("input", updateSizeRange);
  maxSize.addEventListener("input", updateSizeRange);

  updatePriceRange();
  updateSizeRange();
});
