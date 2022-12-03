const form = document.querySelector('.page__form');
const email = document.querySelector('.page__email');
const errorIcon = document.querySelector('.form__error-icon');
const errorMsg = document.querySelector('.form__error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(email.value)) {
        errorIcon.style.display = 'block'
        errorMsg.style.display = 'block'
    } else {
        errorIcon.style.display = 'none'
        errorMsg.style.display = 'none'
    }
})