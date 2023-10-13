document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register");
    const loginForm = document.getElementById("login");
    const securedContent = document.getElementById("secured-content");
    const authContainer = document.getElementById("auth-container");

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const regUsername = document.getElementById("reg-username").value;
        const regPassword = document.getElementById("reg-password").value;
        localStorage.setItem(regUsername, regPassword);
        alert("Registration successful. Please log in.");
        registerForm.reset();
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;
        const storedPassword = localStorage.getItem(loginUsername);

        if (loginPassword === storedPassword) {
            authContainer.style.display = "none";
            securedContent.style.display = "block";
        } else {
            alert("Invalid credentials. Please try again.");
            loginForm.reset();
        }
    });

    const logoutButton = document.getElementById("logout");
    logoutButton.addEventListener("click", function () {
        securedContent.style.display = "none";
        authContainer.style.display = "block";
    });
});
