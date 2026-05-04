function register() {
    let user = username.value;
    let pass = password.value;

    if (!user || !pass) {
        loginMsg.textContent = "Rellena todos los campos";
        return;
    }

    if (localStorage.getItem("user_" + user)) {
        loginMsg.textContent = "El usuario ya existe";
        return;
    }

    localStorage.setItem("user_" + user, pass);
    localStorage.setItem("boosters_" + user, 0);
    loginMsg.textContent = "Registrado correctamente";
}

function login() {
    let user = username.value;
    let pass = password.value;

    if (localStorage.getItem("user_" + user) === pass) {
        localStorage.setItem("currentUser", user);
        playerName.textContent = user;
        loginScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
    } else {
        loginMsg.textContent = "Datos incorrectos";
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}
