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

function listProducts()  {
    document.querySelector('.listProducts ul li').classList.toggle('active');
}

$(document).ready(function(){
    $(".btn1").click(function(){
      slideUp();
    });
});