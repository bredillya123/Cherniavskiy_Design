
// open consultation form
function openForm(e) {
    e.preventDefault();
    let ourFormBlock = document.getElementById("consultation");
    ourFormBlock.classList.add("consultation--active");

    let ourBody = document.querySelector("body");
    ourBody.classList.add("lock");
};

const openButtons = document.querySelectorAll('.open-form');
openButtons.forEach((button) => {
    button.addEventListener('click', openForm);
});

// close consultation form
function closeForm(e) {
    e.preventDefault();
    let ourFormBlock = document.getElementById("consultation");
    ourFormBlock.classList.remove("consultation--active");

    let ourBody = document.querySelector("body");
    ourBody.classList.remove("lock");

    let ourForm = document.getElementById("form");
    ourForm.reset();
};

const btnCloseForm = document.querySelector(".consultation__form--close");
btnCloseForm.addEventListener('click', closeForm);

// open full form
const fullForm = document.querySelector(".form__full");
const btnShowForm = document.getElementById("show-form");
const btnSendForm = document.getElementById("send-form");

btnShowForm.addEventListener('click', function (e){
    e.preventDefault();
    fullForm.classList.add("form__full--active");
    btnShowForm.classList.add("form__btn--remove");
    btnSendForm.classList.add("form__btn--active")
});

// open select
const selectCustom = document.getElementById("custom-select");

function openingSelect (e){
    let selectContainer = document.querySelector(".select-container");
    let selectCustom = document.querySelector(".custom-select");
    let selectArrow = document.querySelector(".arrow-svg");
    let selectList = document.querySelector(".select-list");

    selectContainer.classList.toggle("select-container--active");
    selectCustom.classList.toggle("custom-select--active");
    selectArrow.classList.toggle("arrow-svg--active");
    selectList.classList.toggle("select-list--active");
};

selectCustom.addEventListener('click', openingSelect);

// choose option						
function selectOn(elem) {
    
    const customOptionId = elem.dataset.position;

    const stylesArray = document.getElementById("styles").options;

    for (let i = 1; i < stylesArray.length; i++) {
        if (customOptionId == i) {
            stylesArray[i].selected = true;

            let infoSelect = document.querySelector(".select-text");
            let textSelect = elem.innerText;

            infoSelect.innerHTML = textSelect;
            openingSelect();
        }
    }
};

// validation fields

// only nums input
function formatPhoneInput(event) {
    const input = event.target;
    const value = input.value;

    const filteredValue = value.replace(/[^\d-]/g, '');

    if (value !== filteredValue) {
        input.value = filteredValue;
    }
}

const onlyNums = document.querySelectorAll('.only-nums');
onlyNums.forEach((input) => {
    input.addEventListener('input', formatPhoneInput);
});
