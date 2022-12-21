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
    // Функция обрезания текста в уведомлениях
    const textSlice = (node, number) => {
        node.forEach(text => {
            if(text.innerHTML.length > number) {
                console.log(text.innerHTML.length);
                text.innerHTML = text.innerHTML.substr(0, number - 1) + ' ... <a href="#" class="notif_list_block_body__more">смотреть еще</a>'
            } 
        })
    }
    let notificationText = document.querySelectorAll('.notif_list_block_body__text');
    textSlice(notificationText, 230);
    //Всплывающие блоки рядом с кнопками.
    let wrapPopup = document.querySelectorAll('.wrap_popupblock');
    wrapPopup.forEach(function(item) {
        let openButton = item.querySelector('span');
        openButton.addEventListener('click', e => toggleActiveClass(e.currentTarget));
        closeOpenBlock(openButton,  openButton.nextElementSibling);
    });
 
})