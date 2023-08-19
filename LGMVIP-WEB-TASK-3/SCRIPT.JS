const registrationForm = document.getElementById("registrationForm");
const fullNameDisplay = document.getElementById("fullNameDisplay");
const emailDisplay = document.getElementById("emailDisplay");
const usernameDisplay = document.getElementById("usernameDisplay");
const displayData = document.getElementById("displayData");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;

    fullNameDisplay.textContent = fullName;
    emailDisplay.textContent = email;
    usernameDisplay.textContent = username;

    displayData.classList.remove("hidden");
    registrationForm.reset();
});
