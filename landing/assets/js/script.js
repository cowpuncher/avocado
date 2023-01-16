const header = document.querySelector('.header');
const body = document.querySelector('body');
const productsWrap = document.querySelector('.products_wrap');
const productsItem = document.querySelectorAll('.products_item');


document.addEventListener('scroll', e => {

    if((header.offsetHeight/2) < window.pageYOffset) {
        body.setAttribute('style','background: #FFEDE8;');
    } else {
        body.setAttribute('style','background: #ffffff;');
    }

    productsItem.forEach((item, index) => {
        if((item.getBoundingClientRect().top + document.documentElement.clientHeight/2) <= 0) {
            if(index == 0) {
                body.setAttribute('style','background: #D3F5FF;');
            } else if(index == 1) {
                body.setAttribute('style','background: #E9E1FF;');
            } else if(index == 2) {
                body.setAttribute('style','background: #FEFFD3;');
            }
        }
    });
});