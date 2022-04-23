function imgSlider(image) {
    document.querySelector('.productImage').src = './images/' + image + '.png';
}

function changeBackgroundColor(color) {
    document.querySelector('#home').style.background = color;
}

function menuToggle()  {
    document.querySelector('.toggleMenu').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
}