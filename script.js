// script.js
document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');
    flower.addEventListener('click', () => {
        flower.classList.toggle('blooming');
    });
});

