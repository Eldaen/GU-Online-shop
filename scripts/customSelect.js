function CustomSelect(options) {
    var elem = options.elem;
    var list = options.list;
    var items = list.querySelectorAll('.sort__li');
    var spans = list.querySelectorAll('.sort__select_span');

    for (var i=0; i< items.length; i++){
        spans[i].style.backgroundColor = items[i].dataset.value;
    }

    elem.onclick = function(event) {
        if (event.target.className == 'sort__title') {
            toggle();
        } else if (event.target.tagName == 'LI') {
            setValue(event.target.innerHTML, event.target.dataset.value);
            close();
        }
    };

    var isOpen = false;

    // ------ обработчики ------

    // закрыть селект, если клик вне его
    function onDocumentClick(event) {
        if (!elem.contains(event.target)) close();
    }

    // ------------------------

    function setValue(title, value) {
        elem.querySelector('.sort__title').innerHTML = title;

        var widgetEvent = new CustomEvent('select', {
            bubbles: true,
            detail: {
                title: title,
                value: value
            }
        });

        elem.dispatchEvent(widgetEvent);

    }

    function toggle() {
        if (isOpen) close();
        else open();
    }

    function open() {
        list.classList.add('sort__ul_open');
        document.addEventListener('click', onDocumentClick);
        isOpen = true;
    }

    function close() {
        list.classList.remove('sort__ul_open');
        document.removeEventListener('click', onDocumentClick);
        isOpen = false;
    }

}