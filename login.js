document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent form submission

        // Get username and password values from form inputs
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Show loading message
        document.body.innerHTML = "<h2>Loading...</h2>";

        // Simulate a delay (replace with actual login process)
        setTimeout(function() {
            // Redirect to userinfo.html with query parameters
            window.location.href = "userinfo.html?username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
        }, 90000); // Simulate 2 seconds delay for loading
    }

    // Check if the form exists before adding event listener
    if (loginForm) {
        loginForm.addEventListener("submit", handleFormSubmission);
    }

    // Additional event listeners if needed (e.g., for buttons)
    var signUpButton = document.getElementById("sign-up-button");
    if (signUpButton) {
        signUpButton.addEventListener("click", function(event) {
            event.preventDefault();
            // Handle sign-up button click
            console.log("Sign up button clicked.");
        });
    }

    var anotherDeviceButton = document.getElementById("another-device-button");
    if (anotherDeviceButton) {
        anotherDeviceButton.addEventListener("click", function(event) {
            event.preventDefault();
            // Handle another device button click
            console.log("Use another device button clicked.");
        });
    }

    var needHelpButton = document.getElementById("need-help-button");
    if (needHelpButton) {
        needHelpButton.addEventListener("click", function(event) {
            event.preventDefault();
            // Handle need help button click
            console.log("Need help button clicked.");
        });
    }
});
