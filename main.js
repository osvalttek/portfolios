const btnToggle = document.querySelector('.toogle-btn');

btnToggle.addEventListener('click', function*() {
    document.getElementById('sidebar').classList.toggle('active');
});