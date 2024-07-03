document.addEventListener("DOMContentLoaded", function() {
    // Retrieve URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    var password = urlParams.get('password');

    // Display username and password
    console.log("Username:", username);
    console.log("Password:", password);

    // Display username and password on the page
    var userInfoContainer = document.getElementById("user-info-container");
    if (userInfoContainer && username !== null && password !== null) {
        userInfoContainer.innerHTML = "Username: " + username + "<br>Password: " + password;
    }
});
