$(document).ready(function () {
  $("#form").submit(function (e) { 
      e.preventDefault();
      validar (e);
  });
  
  $("#password").keyup(function (e) { 
      validar(e);
  });
  $("#repeatPassword").keyup(function (e) { 
      validar(e);
});

function validar(e) {
  let error = false;
  let password = $("#password").val();
  let passwordRepeat = $("#repeatPassword").val();

  let regexPass =  /^(?=.*[a-zA-z]{2,})(?=.*\d{2,})(?=.*[$@$!%*?&#.$($)$-$_]{2,})[A-Za-z\d$@$!%*?&#.$($)$-$_]{8}$/;

  $("#mensaje").empty();

  if (password == "" || !password.match(regexPass)) {
      error = true;
      $("#mensaje").append("<p>La contraseña es obligatoria y debe ser de 8 caracteres <br>( mínimo 2 letras, 2 números y 2 caracteres especiales) </p>");
  }
  if(passwordRepeat != password){
      error = true;
      $("#mensaje").append("<p>Las contraseñas no son iguales</p>");
  }
      
  if(error){
      e.preventDefault();
      $("#confirmar").removeClass();
      $("#confirmar").addClass("disabled");
      $("#confirmar").attr("disabled", "disabled");
  }else{
      $("#confirmar").removeClass();
      $("#confirmar").addClass("enabled");
      $("#confirmar").removeAttr("disabled");
  }
}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          console.log(form)
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

const togglePassword = document
            .querySelector('#togglePassword');
            const toggleRepeatPassword = document
            .querySelector('#toggleRepeatPassword');  
        const password = document.querySelector('#password');
        const repeatPassword = document.querySelector('#repeatPassword');
        togglePassword.addEventListener('click', () => {
            // Toggle the type attribute using
            // getAttribure() method
            const type = password
                .getAttribute('type') === 'password' ?
                'text' : 'password';
            password.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
        });
        toggleRepeatPassword.addEventListener('click', () => {
            // Toggle the type attribute using
            // getAttribure() method
            const type = repeatPassword
                .getAttribute('type') === 'password' ?
                'text' : 'password';
            repeatPassword.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
        });
      })