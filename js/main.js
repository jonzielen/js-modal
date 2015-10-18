document.getElementById('launch-modal').addEventListener('click', function() {
    launchModal();
    addCloseModal();

    // Make sure the initial state is applied.
    window.getComputedStyle(document.getElementById('modal-bg')).opacity;

    addClassName('close-modal-bg', ' fadeIn');
    addClassName('modal-wrapper', ' fadeIn');
});

function launchModal() {
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
            document.body.className += 'modal-close';

            var time = getTransitionTime('modal-bg');
            time = transitionTimeToSetTime(time);

            setTimeout(function(){
                removeElement('modal-wrapper');
                removeElement('close-modal-bg');
                removeClass('.modal-close');
            }, time);
        });
    }
}

function transitionTimeToSetTime(time) {
    time = Number(time.substring(0, time.length - 1));
    time = time * 1000;

    return time;
}

function getTransitionTime(id) {
    var element = document.getElementById(id),
    style = window.getComputedStyle(element),
    transition = style.getPropertyValue('transition-duration');

    return transition;
}

function addClassName(elem, className) {
    var elems = document.getElementsByClassName(elem);

    for (var i = 0; i < elems.length; i++) {
        elems[i].className += className;
    }
}

function removeClass(className) {
    var classToRemove = document.querySelectorAll(className);

    for (var i = 0; i < classToRemove.length; i++) {
        classToRemove[i].className = classToRemove[i].className.replace(className.substring(1), '');
    }
}

function removeElement(child) {
    var elemToRemove = document.getElementsByClassName(child);

    for (var i = 0; i < elemToRemove.length; i++) {
        document.body.removeChild(elemToRemove[i]);
    }
}
