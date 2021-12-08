window.addEventListener('scroll', () => {
    let rowscrol1 = document.querySelector('.scrool-1');
    let rowscrol2 = document.querySelector('.scrool-2');
    let rowscrol3 = document.querySelector('.scrool-3');
    let rowscrol4 = document.querySelector('.scrool-4');
    let rowscrol5 = document.querySelector('.scrool-5');
    let rowscrolp = document.querySelector('.scrool-p');
    let rowscrolt1 = document.querySelector('.scrool-t1');
    let rowscrolt2 = document.querySelector('.scrool-t2');
    let rowscrolt3 = document.querySelector('.scrool-t3');
    let rowscrol1position = rowscrol1.getBoundingClientRect().top;
    let rowscrol2position = rowscrol3.getBoundingClientRect().top;
    let rowscrol5position = rowscrol5.getBoundingClientRect().top;
    let rowscrolpposition = rowscrolp.getBoundingClientRect().top;
    let rowscroltposition = rowscrolp.getBoundingClientRect().top;

    let screenposition = window.innerHeight;
    let screen5position = window.innerHeight * 1.5;
    if (rowscrol5position < screen5position) {
        rowscrol5.classList.add('scrollactive5');

    } else {
        rowscrol5.classList.remove('scrollactive5');

    }
    if (rowscrol2position < screenposition) {
        rowscrol3.classList.add('scrollactive2');
        rowscrol4.classList.add('scrollactive2');
    } else {
        rowscrol3.classList.remove('scrollactive2');
        rowscrol4.classList.remove('scrollactive2');
    }
    if (rowscrol1position < screenposition) {
        rowscrol1.classList.add('scrollactive');
        rowscrol2.classList.add('scrollactive');
    } else {
        rowscrol1.classList.remove('scrollactive');
        rowscrol2.classList.remove('scrollactive');
    }
    if (rowscrolpposition < screenposition) {
        rowscrolp.classList.add('scrollactivep');

    } else {
        rowscrolp.classList.remove('scrollactivep');

    }
    if (rowscroltposition < screenposition) {
        rowscrolt1.classList.add('scrollactivet');
        rowscrolt2.classList.add('scrollactivet');
        rowscrolt3.classList.add('scrollactivet');

    } else {
        rowscrolt1.classList.remove('scrollactivet');
        rowscrolt2.classList.remove('scrollactivet');
        rowscrolt3.classList.remove('scrollactivet');
    }

});
window.addEventListener('scroll', () => {

});