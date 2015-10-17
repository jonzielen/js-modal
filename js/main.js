document.getElementById('launch-modal').addEventListener('click', function() {
    launchModal();
    addCloseModal();
})

function launchModal() {
    document.body.className += ' modal-open';

    var modalBg = createElem('DIV', 'id', 'modal-bg');
    modalBg.className = 'close-modal';
    modalBg.className += ' close-modal-bg';
    addToDom('body', modalBg);

    var modalWrapper = createElem('DIV', 'class', 'modal-wrapper');
    addToDom('body', modalWrapper);
}

function createElem(elem, attr, attrValue) {
    var newElem = document.createElement(elem);
    newElem.setAttribute(attr, attrValue);

    return newElem;
}

function addToDom(parent, child) {
    document.querySelector(parent).appendChild(child);
}

// close modal
function addCloseModal() {
    var closeModal = document.querySelectorAll('.close-modal');

    for (var i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener('click', function() {
            document.body.className += ' modal-close';
            addFadeOut('close-modal-bg');
            addFadeOut('modal-wrapper');

            removeClass('.modal-open');

            //removeElement('close-modal-bg');
            //removeElement('modal-wrapper');
        });
    }
}

function removeClass(className) {
    var classToRemove = document.querySelectorAll(className);

    for (var i = 0; i < classToRemove.length; i++) {
        classToRemove[i].className = classToRemove[i].className.replace(className.substring(1), '');
    }
}

function addFadeOut(child) {
    var elemToFadeOut = document.getElementsByClassName(child);

    for (var i = 0; i < elemToFadeOut.length; i++) {
        elemToFadeOut[i].className += ' fadeOut';
    }
}

function removeElement(child) {
    var elemToRemove = document.getElementsByClassName(child);

    for (var i = 0; i < elemToRemove.length; i++) {
        document.body.removeChild(elemToRemove[i]);
    }
}
