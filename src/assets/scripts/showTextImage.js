const figure = document.querySelector('.canelonsFigure');

figure.addEventListener('click', function () {
    this.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    if (!figure.contains(event.target)) {
        figure.classList.remove('active');
    }
});