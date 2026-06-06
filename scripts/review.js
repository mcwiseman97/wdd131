document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = parseInt(localStorage.getItem("reviewSubmissionCount")) || 0;

  reviewCount++;
  localStorage.setItem("reviewSubmissionCount", reviewCount);

  const counterElement = document.getElementById("review-count");
  if (counterElement) {
    counterElement.textContent = reviewCount;
  }

  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  const lastModifiedElement = document.getElementById("lastModified");
  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
});
