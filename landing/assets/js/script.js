const header = document.querySelector('.header');
const body = document.querySelector('body');
const products = document.querySelector('.products');
const productsWrap = document.querySelector('.products_wrap');
const productsItem = document.querySelectorAll('.products_item');
const productsImage = document.querySelectorAll('.products_item_image .image');
const offer = document.querySelector('.offer');
const offerList = document.querySelector('.offer_list');


document.addEventListener('scroll', e => {

    if((header.offsetHeight/2) < window.pageYOffset) {
        header.setAttribute('style','background: #FFEDE8;');
        products.setAttribute('style','background: #FFEDE8;');
    } else {
        header.setAttribute('style','background: #ffffff;');
        products.setAttribute('style','background: #ffffff;');
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
        //let imageBound = productsImage[i].getBoundingClientRect();

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

    if(offer.getBoundingClientRect().top <= 0) {
        let activeTrack = 0;
        //offer.addEventListener('wheel', function(event) {
        //    if(activeTrack > 0) {
        //        body.classList.add('hidden');
        //        console.log(activeTrack);
        //        //offerList.setAttribute('style', 'transform: translate(-'+activeTrack/50+'%, 0);')
        //    } else {
        //        body.classList.remove('hidden');
        //    }
        //    activeTrack = activeTrack + event.deltaY;
        //    console.log(activeTrack);
        //})

        
    }

    //for(var i = 0; i < offerList.children.length; i++) {
    //    console.log(offerList.children[i].scrollWidth );
    //}
});