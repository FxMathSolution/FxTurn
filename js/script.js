// Function to toggle the popup
function togglePopup() {
  const popup = document.getElementById("popup");
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
