window.addEventListener('DOMContentLoaded', e => {
    // Функции 
    const addActiveClass = (elm) => elm.classList.add('active');
    const removeActiveClass = (elm) => elm.classList.remove('active');
    const toggleActiveClass = (elm) => elm.classList.toggle('active');
    //Функция закрытия при клике вне блока
    const closeOpenBlock = (button, block, overlay) => {
        document.addEventListener('click', e => {
            const target = e.target;
            const its_block = target == block || block.contains(target);
            const its_button = target.closest('span') == button;
            if (!its_block && !its_button) {
                removeActiveClass(block);
                removeActiveClass(button);
                overlay !== undefined ? removeActiveClass(overlay) : false;
            }
        })
    } 
    // Функция обрезания текста в уведомлениях с кнпкой "смотреть еще"
    const textSlice = (node, number) => {        
        node.forEach((text) => {
            let fullText = text.innerHTML;
            if(fullText.length > number) {
                text.innerHTML = text.innerText.substr(0, number - 1) + ' ... ';
                text.insertAdjacentHTML('afterend', '<a class="notif_list_block_body__more">смотреть еще</a>');
            } 
            let moreBtn = text.closest('.notif_list_block_body').querySelector('.notif_list_block_body__more');            
            moreBtn.addEventListener('click', e => {
                e.target.closest('.notif_list_block_body').classList.toggle('open');
                if(e.target.closest('.notif_list_block_body').classList.contains('open')) {
                    text.innerHTML = fullText;
                    e.target.innerHTML = 'cвернуть';
                } else {
                    text.innerHTML = text.innerHTML.substr(0, number - 1) + ' ... ';
                    e.target.innerHTML = 'смотреть еще';
                }
            });
        })
    }
    let notificationText = document.querySelectorAll('.notif_list_block_body__text');
    textSlice(notificationText, 230);
    //Всплывающие блоки рядом с кнопками.
    function popupActivated() {
        let wrapPopup = document.querySelectorAll('.wrap_popupblock');
        wrapPopup.forEach(function(item) {
            let openButton = item.querySelector('span');
            openButton.addEventListener('click', e => toggleActiveClass(e.currentTarget));
            closeOpenBlock(openButton,  openButton.nextElementSibling);
        });
    } 
    popupActivated();
    // Активация стилизации селектов
    customSelect("select", 1);

    // Ширина прокрутки страницы и ширины экрана
    const sizeWindow = (screen) => {
        let scrollBar = window.innerWidth - screen;
        return screen + scrollBar;
    }
    //---------- Клонирование элементов
    // Клонирование в конец списка
    const cloneElementWithRemove = (divGet, divInsert) => divInsert.append(divGet);
    // Клонирование в начало списка
    const cloneElementBeforeWithRemove = (divGet, divInsert) =>  divInsert.prepend(divGet);
    // Клонирование в конец списка без удаления элемента
    const cloneElementWithoutRemove = (divGet, divInsert) => {
        const newDiv = divGet.cloneNode( true );
        divInsert.appendChild( newDiv );
    }
    // Перенос элементов в зависимости от разрешения
    function permutationElements() {
        // Уведомления
        let notif = document.getElementById('notif');
        if(sizeWindow(document.body.clientWidth) < 993) { 
            cloneElementBeforeWithRemove(notif, document.querySelector('.header_top_nav'));
        } else {
            cloneElementBeforeWithRemove(notif, document.querySelector('.body_top_nav'));
        }
    }
    permutationElements();
    // Проверка окна при ресайзе
    window.addEventListener('resize', e => {
        permutationElements();
    })
   

    let menu = document.querySelector('.menu');
    let menuWidth = 0;
    menu.querySelectorAll('li a').forEach(item => {
        menuWidth = menuWidth + item.clientWidth;
        console.log( item.scrollWidth);
    })
    menu.setAttribute('style', 'width: ' + menuWidth +'px;')
})