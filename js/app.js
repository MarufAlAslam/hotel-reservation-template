// dom controllers
const promoHandler = document.getElementById('promo');
const promoHolder = document.getElementById('promo-holder');
const promoCloser = document.getElementById('promo-closer');

promoHandler.addEventListener('click', () => {
    promoHolder.classList.toggle('active');
    promoHandler.classList.toggle('inactive');
});

promoCloser.addEventListener('click', () => {
    promoHolder.classList.toggle('active');
    promoHandler.classList.toggle('inactive');
});