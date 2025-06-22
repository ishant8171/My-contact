function checkDetails() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value.trim();
    const pass = passwordInput.value;

    if (pass === '' || username === '') {
        alert("Username and password can't be empty");
    }
    else if (pass !== (username + '@123')) {
        usernameInput.value = '';
        passwordInput.value = '';
        alert("Wrong username or password");
    }
    else {
        window.location.href = "./public/home/home.html";
        alert("Login Successfully!")
    }
}
