const hero = document.querySelector('.hero');

let position = 0;

function animate () {
    position += 0.5;
    hero.style.backgroundPosition = `${position}px 0`;
    requestAnimationFrame(animate);
}

animate();