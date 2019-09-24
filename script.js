// modal
window.onload = function () {
    if (e.target.classList == '.product-container' || e.target.className == 'potion-image') {
        imageClick();
    }
}
function showModal() {
    const modal = document.querySelectorAll('.modal-container');
    [...modal].map(el => {
        el.addEventListener('click', (e) => {
            console.log(e.currentTarget);
        })
        el.classList.add('show');
        el.addEventListener('click', function (e) {
            if (e.target.className == '.modal-container' || e.target.className == 'button-close') {
                el.classList.remove('show');
            }
        });
    })
};

function imageClick() {
    const potionImage = document.querySelectorAll('.product-container');
    for (var i = 0; i < potionImage.length; i++) {
        potionImage[i].addEventListener('click', function () {
            showModal();
        });
    }
}