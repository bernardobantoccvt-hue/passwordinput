document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Rule 1: Length Check
    if (password.length < 8) {
        alert("Password should be more than 8 characters.");
        return; // Stops the function here
    }

    // Rule 2: Integer Only Check
    if (/^\d+$/.test(password)) {
        alert("Password cannot consist only of integers.");
        return; 
    }

    // Rule 3: Uppercase and Lowercase Check
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);

    if (!hasUpper || !hasLower) {
        alert("Password should contain both uppercase and lowercase characters.");
        return;
    }

    // If all rules pass, show the data in the console
    console.log("Username: " + username);
    console.log("Password: " + password);
    alert("Registration Successful!");
});
