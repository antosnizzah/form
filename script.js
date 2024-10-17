// Simple form validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    // Show an alert if the form is successfully submitted
    alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}`);
});
