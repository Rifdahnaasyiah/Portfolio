document.addEventListener('DOMContentLoaded', function() {
    const tombolMenu = document.querySelector('.tombol-menu');
    const menu = document.querySelector('.menu');

    tombolMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
