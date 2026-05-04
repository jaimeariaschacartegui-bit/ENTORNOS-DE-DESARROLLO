let scene, camera, renderer;
let cube, platforms = [];
let speed = 0.1;
let score = 0;
let jumping = false;
let velocityY = 0;

function startGame() {
    menuScreen.classList.add("hidden");
    gameCanvas.classList.remove("hidden");
    hud.classList.remove("hidden");

    init3D();
    animate();
}

function init3D() {
    renderer = new THREE.WebGLRenderer({ canvas: gameCanvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    let light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    document.addEventListener("keydown", handleKeys);
}

function handleKeys(e) {
    if (e.key === "ArrowLeft") cube.position.x -= 0.2;
    if (e.key === "ArrowRight") cube.position.x += 0.2;
    if (e.key === "ArrowUp" && !jumping) {
        jumping = true;
        velocityY = 0.15;
    }
}

function animate() {
    requestAnimationFrame(animate);

    if (jumping) {
        cube.position.y += velocityY;
        velocityY -= 0.01;
        if (cube.position.y <= 0) {
            cube.position.y = 0;
            jumping = false;
        }
    }

    score++;
    document.getElementById("score").textContent = "Puntos: " + score;

    renderer.render(scene, camera);
}
