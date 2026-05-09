// scripts/getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Insert current year into the footer
document.getElementById("currentyear").textContent = currentYear;

// Insert last modified date into the footer
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;