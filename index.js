

const hamburgerMenu = document.querySelector('.ham-menu');
const hamburgerIcon = document.querySelector('.ham-icon');

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

const hamburgerMenuLinks = document.querySelectorAll('.ham-menu a');

hamburgerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
    });
}
);