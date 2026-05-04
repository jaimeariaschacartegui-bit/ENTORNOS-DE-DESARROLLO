// main.js
window.onload = () => {
    const user = localStorage.getItem("currentUser");

    if (user) {
        loginScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
        playerName.textContent = user;
    } else {
        loginScreen.classList.remove("hidden");
    }
};

// Navegación entre pantallas
function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    if (screen) screen.classList.remove("hidden");
}
