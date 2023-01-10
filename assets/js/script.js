window.addEventListener('DOMContentLoaded', e => {
    //ANCHOR Функции 
    const addActiveClass = (elm) => elm.classList.add('active');
    const removeActiveClass = (elm) => elm.classList.remove('active');
    const toggleActiveClass = (elm) => elm.classList.toggle('active');
    // Ширина прокрутки страницы и ширины экрана
    const sizeWindow = (screen) => {
        let scrollBar = window.innerWidth - screen;
        return screen + scrollBar;
    }
    // Клонирование в конец списка
    const cloneElementWithRemove = (divGet, divInsert) => divGet ? divInsert.append(divGet) : false;
    // Клонирование в начало списка
    const cloneElementBeforeWithRemove = (divGet, divInsert) => divGet ? divInsert.prepend(divGet) : false;
    // Клонирование в конец списка без удаления элемента
    const cloneElementWithoutRemove = (divGet, divInsert) => {
        const newDiv = divGet.cloneNode( true );
        divInsert.appendChild( newDiv );
    }

    //ANCHOR ---- Бургер меню
    document.getElementById('burger_btn').onclick = () => toggleActiveClass(document.querySelector('.popup_menu'));
    document.querySelector('.popup_menu .popup_fullpage_close').onclick = () => toggleActiveClass(document.querySelector('.popup_menu'));

    //ANCHOR ---- Фильтр меню
    if(document.getElementById('burger_filter')) {
        document.getElementById('burger_filter').onclick = () => {
            addActiveClass(document.querySelector('.popup_filter'));
            setTimeout(() => {
                cloneElementWithRemove(document.querySelector('.filter_form'), document.querySelector('.popup_filter_body'));
            }, 300);
        };
        document.querySelector('.popup_filter .popup_fullpage_close').onclick = () => {
            toggleActiveClass(document.querySelector('.popup_filter'));
            cloneElementWithRemove(document.querySelector('.filter_form'), document.querySelector('.filter'));
        };
    }
    
    //ANCHOR ---- Функция закрытия при клике вне блока
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
    
    //ANCHOR ---- Всплывающие блоки рядом с кнопками.
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
    
    //ANCHOR ---- Функция обрезания текста в уведомлениях с кнпкой "смотреть еще"
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

    //ANCHOR ---- Клонирование элементов
    // Перенос элементов в зависимости от разрешения
    function permutationElements() {
        // Уведомления
        let notif = document.getElementById('notif');
        // Добавления сотрудников
        let personalAdd = document.querySelector('.personal_add');
        // Усвлоия переноса для планшета
        if(sizeWindow(document.body.clientWidth) < 993) { 
            cloneElementBeforeWithRemove(notif, document.querySelector('.header_top_nav'));
            cloneElementBeforeWithRemove(personalAdd, document.querySelector('.header_top_nav'));
        } else {
            cloneElementBeforeWithRemove(notif, document.querySelector('.body_top_nav'));
            cloneElementBeforeWithRemove(personalAdd, document.querySelector('.body_top_nav'));
        }
    }
    permutationElements();
    // Проверка окна при ресайзе
    window.addEventListener('resize', e => {
        permutationElements();
    })

    // ANCHOR Попапы
    if (document.querySelector('.popup')) {
        let popupClose = document.querySelectorAll('.popupClose');
        let popupOverlay = document.querySelectorAll('.popupOverlay');
        const closePopupUpdate = (el, timer = 0) => {
            setTimeout(() => {
                for(elem of el) {
                    console.log(el);
                    elem.addEventListener('click', e => {
                        e.currentTarget.closest('.popup').classList.remove('active');
                    })
                }
                
            }, timer);
        }
        closePopupUpdate(popupOverlay);
        closePopupUpdate(popupClose);
        
        const activePopupUpdate = (el) => {
            let popup = document.querySelector(el);
            popup.classList.add('active');
        }
        const clickPopupOpen = (el) => {
            if(document.querySelector(el)) {
                document.querySelector(el).addEventListener('click', e => {
                    activePopupUpdate('.popup');//активировать pop-up   
                })
            }
        }
        clickPopupOpen('.personal_add');
        clickPopupOpen('.referral_button');
        clickPopupOpen('.faq_button');
        // ANCHOR Копирование Реф программы
        if(document.querySelector('.referral_button_copy')) {
            const copyButton = document.querySelector('.referral_button_copy');
            const copyInputRef = document.querySelector('.popupWindow_form_ref input');
            copyButton.addEventListener('click', () => {
                copyButton.innerHTML = 'Ссылка скопирована';
                window.navigator.clipboard.writeText(copyInputRef.value);
            })
        }
    }
    // ANCHOR Faq
    const faq = document.querySelectorAll('.faq_list_item');
    faq.forEach(item => {
        item.addEventListener('click', e => {
            toggleActiveClass(e.currentTarget);
        })
    })
})