const header = document.querySelector('.header');
const body = document.querySelector('body');
const products = document.querySelector('.products');
const productsWrap = document.querySelector('.products_wrap');
const productsItem = document.querySelectorAll('.products_item');
const productsImage = document.querySelectorAll('.products_item_image .image');
const offerWrap = document.querySelector('.offer_wrap');
const offer = document.querySelector('.offer');
const offerList = document.querySelector('.offer_list');


function readyPage() {

    // При загрузке страница начинать скролл с самого верха
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    document.addEventListener('scroll', e => {

        let topOffset = window.pageYOffset;
        //Смена фона у хедера
        if((header.offsetHeight/2) < topOffset) {
            header.setAttribute('style','background: #FFEDE8; transition: all .5s ease;');
            products.setAttribute('style','background: #FFEDE8;transition: all .5s ease; ');
        } else {
            header.setAttribute('style','background: #ffffff;transition: all .5s ease;');
            products.setAttribute('style','background: #ffffff;transition: all .5s ease;');
        }

        // Смена фона 
        for(var i = 0; i < productsItem.length; i++) {
            if((productsItem[i].getBoundingClientRect().top + document.documentElement.clientHeight/2) <= 0) {
                if(i == 0) {
                    products.setAttribute('style','background: #D3F5FF;transition: all .5s ease;');
                } else if(i == 1) {
                    products.setAttribute('style','background: #E9E1FF;transition: all .5s ease;');
                } else if(i == 2) {
                    products.setAttribute('style','background: #FEFFD3;transition: all .5s ease;');
                }
            }
        }

        // Смена картинок 
        for(var i = 0; i < productsItem.length; i++) {
            let productBound = productsItem[i].getBoundingClientRect();
            productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px 0%);');
            if((productBound.top) <= 0) {
                if(i == 0) {
                    productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');                
                    productsImage[i+1].setAttribute('style', 'clip-path: inset(0px 0px 0%);');
                } else if(i == 1) {
                    productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');
                    productsImage[i+1].setAttribute('style', 'clip-path: inset(0px 0px 0%);');
                } else if(i == 2) {
                    productsImage[i].setAttribute('style', 'clip-path: inset(0px 0px '+ ((-productBound.top/window.innerHeight)*100) +'%);');
                }
            }
        }

        // Горизонтальные карточки 
        let countNumb = 0;
        for(var i = 0; i < offerList.children.length; i++) {
            countNumb = countNumb + offerList.children[i].scrollWidth
        }    
        if(offerWrap.getBoundingClientRect().top <= 0 && -(countNumb/4) < offerWrap.getBoundingClientRect().top) {
            offerList.setAttribute('style', 'transform: translate('+ offerWrap.getBoundingClientRect().top/10 +'%,0);');
        }

        // Преимущества
        let privilege = document.querySelector('.privilege');
        let privilegeList1 = document.getElementById('privilege_list-1');
        let privilegeList2 = document.getElementById('privilege_list-2');
        
        let privOffset = privilege.getBoundingClientRect().top - document.documentElement.clientHeight;

        if(privOffset <= 0) {  
            if((10 + (privOffset/100)) > 0) {
                if((10 + (privOffset/100)) > 0) {
                    privilegeList1.setAttribute('style', 'transform: translate('+(100 + privOffset/10)+'%, 0)');
                }
                if((7 + (privOffset/100)) > 0) {
                    privilegeList2.setAttribute('style', 'transform: translate('+(70 + privOffset/10)+'%, 0)');
                }
            }
        }

        // Партнеры
        let partners = document.querySelector('.partners');
        let partnersList1 = document.getElementById('partners_list_1');
        let partnersList2 = document.getElementById('partners_list_2');
        let partnersList3 = document.getElementById('partners_list_3');
        
        let partnerOffset = partners.getBoundingClientRect().top - document.documentElement.clientHeight;
        if(partnerOffset <= 0) {  
            partnersList1.setAttribute('style', 'transform: translate(' + (-200+partnerOffset/10)+'px, 0)');
            partnersList2.setAttribute('style', 'transform: translate(' + (-400+(-partnerOffset/10))+'px, 0)');
            partnersList3.setAttribute('style', 'transform: translate(' + (-100+(partnerOffset/10))+'px, 0)');
            
        }

        
        // Смена текста
        let framesSection = document.querySelector('.frames_section');
        let frames = document.querySelector('.frames');
        let frame = frames.querySelectorAll('.frame');

        if(framesSection.getBoundingClientRect().top <= 0) {                
            if(framesSection.getBoundingClientRect().top < -600) {
                frames.querySelector('img').setAttribute('style', 'top: '+(100 - (-framesSection.getBoundingClientRect().top/topOffset)*1000)+'%;  transform: scale(1); ');
            } else {
                if((600 - (-framesSection.getBoundingClientRect().top)) < 10) {
                    frames.querySelector('img').setAttribute('style', 'top: '+(100 - (-framesSection.getBoundingClientRect().top/topOffset)*1000)+'%; transform: scale(1.00'+ (600 - (-framesSection.getBoundingClientRect().top)) +');' );
                } else if((600 - (-framesSection.getBoundingClientRect().top)) < 100 ) {
                    frames.querySelector('img').setAttribute('style', 'top: '+(100 - (-framesSection.getBoundingClientRect().top/topOffset)*1000)+'%; transform: scale(1.0'+ (600 - (-framesSection.getBoundingClientRect().top)) +');' );
                } else {
                    frames.querySelector('img').setAttribute('style', 'top: '+(100 - (-framesSection.getBoundingClientRect().top/topOffset)*1000)+'%; transform: scale(1.'+ (600 - (-framesSection.getBoundingClientRect().top)) +');' );
                }
            }
        } else if(framesSection.getBoundingClientRect().top > 0 && framesSection.getBoundingClientRect().top < 400) {
            frames.querySelector('img').setAttribute('style', 'top: '+(100 - (-framesSection.getBoundingClientRect().top/topOffset)*1000)+'%; transform: scale(1.'+ (600 - (-framesSection.getBoundingClientRect().top)) +');' );
        }

        
        for(var i = 0; i < frame.length; i++) {
            if(framesSection.getBoundingClientRect().top < -1600 ) {
                frame[i].classList.remove('show');
                frame[4].classList.add('show');
                frame[4].classList.add('show_top');
            } else if(framesSection.getBoundingClientRect().top < -1400 ) {
                frame[i].classList.remove('show');
                frame[3].classList.add('show');
                frame[3].classList.add('show_bottom');
                frame[3].classList.add('show_top');
            } else if(framesSection.getBoundingClientRect().top < -1200 ) {
                frame[i].classList.remove('show');
                frame[2].classList.add('show');
                frame[2].classList.add('show_bottom');
                frame[2].classList.add('show_top');
            } else if(framesSection.getBoundingClientRect().top < -750 ) {
                frame[i].classList.remove('show');
                frame[1].classList.add('show');
                frame[1].classList.add('show_bottom');
            } else if(framesSection.getBoundingClientRect().top < -550 ) {
                frame[i].classList.remove('show');
                frame[1].classList.remove('show_bottom');
                frame[1].classList.add('show');
            } else {
                frame[i].classList.remove('show');
                frame[0].classList.add('show');
            }
        } 

    });

}

document.addEventListener("DOMContentLoaded", readyPage);