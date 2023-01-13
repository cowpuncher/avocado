const header = document.querySelector('.header');

document.addEventListener('scroll', e => {
    if((header.offsetHeight/2) < window.pageYOffset) {
        header.setAttribute('style','background: #FFEDE8;');
    } else {
        header.setAttribute('style','background: #ffffff;');
    }
    
})