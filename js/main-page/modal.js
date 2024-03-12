let modalWindow = document.querySelector(".modal-back");
let modalForm = document.querySelector(".modal-popup");
let modalCross = document.querySelector(".modal-close");

if (sessionStorage.getItem("modalClosed") !== "true") {
    setTimeout(function() {
        if (modalWindow && !modalWindow.classList.contains('modal-back--active')) {
            modalWindow.classList.add('modal-back--active');
        }
    }, 15000);
}

function closeModalOut(e) {
    e.preventDefault();
    if (!modalForm.contains(e.target)) {
        if (modalWindow.classList.contains('modal-back--active')) {
            modalWindow.classList.remove('modal-back--active');
            sessionStorage.setItem("modalClosed", "true");
        }
    }
}

function closeModalCross(e) {
    e.preventDefault();
    if (modalWindow.classList.contains('modal-back--active')) {
        modalWindow.classList.remove('modal-back--active');
        sessionStorage.setItem("modalClosed", "true");
    }
}

modalCross.addEventListener('click', closeModalCross);
modalWindow.addEventListener('click', closeModalOut);