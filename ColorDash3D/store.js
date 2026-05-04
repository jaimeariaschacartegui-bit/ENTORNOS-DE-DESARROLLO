function openStore() {
    menuScreen.classList.add("hidden");
    storeScreen.classList.remove("hidden");

    let user = localStorage.getItem("currentUser");
    boosterCount.textContent = localStorage.getItem("boosters_" + user);
}

function buyBooster() {
    let user = localStorage.getItem("currentUser");
    let boosters = parseInt(localStorage.getItem("boosters_" + user));
    boosters++;
    localStorage.setItem("boosters_" + user, boosters);
    boosterCount.textContent = boosters;
}

function backToMenu() {
    storeScreen.classList.add("hidden");
    menuScreen.classList.remove("hidden");
}
