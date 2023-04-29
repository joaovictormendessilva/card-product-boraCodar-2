const productImagePic = document.getElementById('productImagePic');
const toggleButton = document.getElementById('toggleButton');

let toggle = true;

function toggleProduct(){
    if (toggle) {
        productImagePic.src = '/assets/sofagif.gif';
        toggleButton.src = '/assets/close.svg';
        toggle = false;
    }
    else{
        productImagePic.src = '/assets/product-image.png';
        toggleButton.src = '/assets/360button.svg';
        toggle = true;
    }
}