const form = document.querySelector('.btn')
const email = document.querySelector('.txtInput').value;
const errorIcon = document.querySelector('#errorIcon')
const errorMsg = document.querySelector('#errorMsg')

form.addEventListener('submit', e => {
    e.preventDefault();
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      if(!validateEmail) {
        form.classList.add('valid')
      }
})

