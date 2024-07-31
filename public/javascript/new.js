const p1 = document.querySelector('#p1');
p1.addEventListener('click', () => {
    alert("Please complete client information to continue")

})

const p2 = document.querySelector('#p2');
p2.addEventListener('click', () => {
    alert("Please complete client information to continue")

})

const p3 = document.querySelector('#p3');
p3.addEventListener('click', () => {
    alert("Please complete client information to continue")

})


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated-form')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()