const VALIDARMAIL = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const VALIDARPASSWORD = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;

const signUp = e => {
  e.preventDefault();
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
        pwd2 = document.getElementById('pwd2').value;
        genero = document.querySelector('input[name="genero"]:checked').value;
        idiomas = document.getElementById('idiomas').value;

    let userInfo = {
      name: fname,
      surname: lname,
      email: email,
      password: pwd,
      password2: pwd2,
      gen: genero,
      idioma: idiomas,
    };

    let error = 0;

    if (fname == "") {
      document.getElementById("fname").style.borderColor = "#FF0000";
      document.getElementById("fname-error").style.display = "inline";
      error++;
    }
    if (lname == "") {
      document.getElementById("lname").style.borderColor = "#FF0000";
      document.getElementById("lname-error").style.display = "inline";
      error++;
    }
    if (email == "" || !valMail(email)) {
      document.getElementById("email").style.borderColor = "#FF0000";
      document.getElementById("email-error").style.display = "inline";
      error++;
    }
    if (pwd == "" || !valPassword(pwd)) {
      document.getElementById("pwd").style.borderColor = "#FF0000";
      document.getElementById("pwd-error").style.display = "inline";
      error++;
    }
    if (pwd2 == "" || !valPassword(pwd2) || pwd2 != pwd) {
      document.getElementById("pwd").style.borderColor = "#FF0000";
      document.getElementById("pwd2").style.borderColor = "#FF0000";
      document.getElementById("pwd2-error").style.display = "inline";
      error++;
    }
    if (genero == "") {
      document.getElementById("genero").style.borderColor = "#FF0000";
      document.getElementById("genero-error").style.display = "inline";
      error++;
    }

    if (error > 0) {
      alert("Hay errores en el registro");
    } else {
      var userInfoString = JSON.stringify(userInfo);
    
    // Guardar la cadena en el Local Storage
    localStorage.setItem(email, userInfoString);

    return location.href = "loguearse.html";
    }
    // Convertir el array de objetos a una cadena de texto
    

    // let formData = JSON.parse(localStorage.getItem('formData')) || [];

    // let exist = formData.length && 
    //     JSON.parse(localStorage.getItem('formData')).some(data => 
    //         data.email.toLowerCase() == email.toLowerCase() 
    //     );

    

     /* if(!exist){
         formData.push({ fname, lname, email, pwd, genero, idiomas });
    
         document.querySelector('form').reset();
         document.getElementById('fname').focus();
         alert("Cuenta creada.\n\nPor favor, vuelva atrás para loguearse.");
     }
     else{
         alert("Ya hay una cuenta creada!");
     } */
    
}

function signIn(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let exist = localStorage.getItem(email) && JSON.parse(localStorage.getItem(email)).password == password;

    if(!exist){
        alert("Sus credenciales no son las adecuadas");
    }
    else{
        location.href = "datos.html?email=" + email;
    }
    
}

//Función para ver que el correo tiene el formato correcto
function validarCorreo() {
   
    let emailRecibido = document.getElementById("email").value;
  
    if (emailRecibido.match(VALIDARMAIL)) {

      document.getElementById("validarEmail").innerHTML = "";
    } else {
      document.getElementById("validarEmail").style.color = "#FF0000";
      document.getElementById("validarEmail").innerHTML =
        "Debe ingresar un correo v&aacutelido";
    }
  }

  function valMail(correo) {
    if (correo.match(VALIDARMAIL)) {
      return true;
    } else {
      return false;
    }
  }

  function valPassword(password) {
    if (password.match(VALIDARPASSWORD)) {
      return true;
    } else {
      return false;
    }
  }

  //Función para comprobar que el campo no está vacío

  function validarCampoNoVacio(id){

    let passwordRecibida = document.getElementById(id).value;
    var validarPassword = "validar" + id.charAt(0).toUpperCase() + id.slice(1);

    /*Aquí recogemos la contraseña y verificamos si el campo queda vacío o no. */

    if(passwordRecibida.trim() == ""){
        document.getElementById(validarPassword).style.color = "#FF0000";
        document.getElementById(validarPassword).innerHTML = "Debe rellenar el campo";
    }else{

        document.getElementById(validarPassword).innerHTML = "";
    }

  }
 

  //Funciones para las cookies

  window.onload = function() {
    /* // si la cookie "accepted_cookies" existe, oculta la banner de cookies
    if (document.cookie.indexOf("accepted_cookies=true") >= 0) {
      document.getElementById("cookie-banner").style.display = "none";
      // muestra el botón de submit con id "btnsumbit"
      document.getElementById("btnsubmit").style.display = "inline";
    } */

    document.getElementById("accept-button").addEventListener("click", function() {
      if (document.getElementById("accept-cookies").checked) {
        // guarda una cookie de que el usuario aceptó las cookies
        document.cookie = "accepted_cookies=true; max-age=31536000";
        // oculta la banner de cookies
        document.getElementById("cookie-banner").style.display = "none";
        document.getElementById("btnsubmit").style.display = "inline";
      }
    });

    //Función para cambiar el color de los botones

  function cambiarColorBoton (id){

    /*Con esto cambiamos los colores de los buttons al posicionarnos sobre ellos y salir*/

    document.getElementById(id).style.backgroundColor = "red";
 
  }

  function colorOriginal (id){

    document.getElementById(id).style.backgroundColor = "";

  }


}
