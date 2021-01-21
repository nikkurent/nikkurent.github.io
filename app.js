const navBar = document.querySelector('.navbar-toogle');
const navLinks = document.querySelector('.nav-links')

navBar.addEventListener('click', (e) => {
    navBar.classList.toggle('active');
    navLinks.classList.toggle('active');
})


