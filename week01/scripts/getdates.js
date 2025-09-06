// Get the current year and insert into footer span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and insert into footer paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
