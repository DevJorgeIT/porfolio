/** Ventana emergente 1*/ 
const open1 = document.getElementById('open1');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');

open1.addEventListener('click',() => {
    modal_container1.classList.add('show');
    
});

close1.addEventListener('click', () => {
    modal_container1.classList.remove('show');
});

/** Ventana emergente 2*/ 
const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');


open2.addEventListener('click',() => {
    modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
    modal_container2.classList.remove('show');
});

