document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code)

  // Add a click event listener to product boxes
  const productBoxes = document.querySelectorAll(".box");

  productBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Add your logic to get the product information or link
      // For demonstration purposes, it opens a new page with a sample link
      const productLink = "product-details.html"; // Change this to the actual product page

      // Open the new page
      window.location.href = productLink;
    });
  });
});
