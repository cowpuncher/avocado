const header = document.querySelector('.header');
const body = document.querySelector('body');
const products = document.querySelector('.products');
const productsWrap = document.querySelector('.products_wrap');
const productsItem = document.querySelectorAll('.products_item');
const productsImage = document.querySelectorAll('.products_item_image .image');
const offerWrap = document.querySelector('.offer_wrap');
const offer = document.querySelector('.offer');
const offerList = document.querySelector('.offer_list');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.addEventListener('scroll', e => {

    if((header.offsetHeight/2) < window.pageYOffset) {
        header.setAttribute('style','background: #FFEDE8; transition: all .5s ease;');
        products.setAttribute('style','background: #FFEDE8;transition: all .5s ease; ');
    } else {
        header.setAttribute('style','background: #ffffff;transition: all .5s ease;');
        products.setAttribute('style','background: #ffffff;transition: all .5s ease;');
    }
    
    for(var i = 0; i < productsItem.length; i++) {
        if((productsItem[i].getBoundingClientRect().top + document.documentElement.clientHeight/2) <= 0) {
            if(i == 0) {
                products.setAttribute('style','background: #D3F5FF;');
            } else if(i == 1) {
                products.setAttribute('style','background: #E9E1FF;');
            } else if(i == 2) {
                products.setAttribute('style','background: #FEFFD3;');
            }
        }
    }
    for(var i = 0; i < productsItem.length; i++) {
        let productBound = productsItem[i].getBoundingClientRect();
        
        if((productBound.top) <= 0) {
            if(i == 0) {              
                productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');                
            } else if(i == 1) {
                productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');
            } else if(i == 2) {
                productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');
            }
        }
    }

    let countNumb = 0;
    for(var i = 0; i < offerList.children.length; i++) {
        countNumb = countNumb + offerList.children[i].scrollWidth
    }

    if(offerWrap.getBoundingClientRect().top <= 0 && -(countNumb/4) < offerWrap.getBoundingClientRect().top) {
        offerList.setAttribute('style', 'transform: translate('+ offerWrap.getBoundingClientRect().top/10 +'%,0);');
    }
    
    //offerWrap.setAttribute('style', 'height: '+Math.floor(countNumb/1.5)+'px;');

});