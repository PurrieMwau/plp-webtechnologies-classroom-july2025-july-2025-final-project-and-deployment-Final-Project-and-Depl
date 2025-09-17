// Toggle highlight class on button click
function toggleHighlight() {
  const section = document.querySelector("section");
  section.classList.toggle("highlight");
}

// Simple form validation (for contact.html)
function validateForm() {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
  return true;
}
