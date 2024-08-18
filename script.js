

document.getElementById("signupForm").addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    document.getElementById("error-message").textContent = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (name === "" || email === "" || password === "") {
        document.getElementById("error-message").textContent = "All fields are required.";
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById("error-message").textContent = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        document.getElementById("error-message").textContent = "Password must be at least 6 characters long.";
        return;
    }

    
    alert("Form submitted successfully!");
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
