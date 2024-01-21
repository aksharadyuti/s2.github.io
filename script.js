
function nextPage(page) {
    window.location.href = page;
}

function sadCat(img) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = "./images/cry.gif";
    setTimeout(() => {
        mainImage.src = img;
    }, 2000);

}

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }

    setInterval(createHeart, 200);
});

function moveButton() {
    var button = document.getElementById('sauthan');
    var x = Math.random() * (window.innerWidth - button.offsetWidth);
    var y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
