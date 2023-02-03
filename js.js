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

    localStorage[email] = JSON.stringify(userInfo);
    // let formData = JSON.parse(localStorage.getItem('formData')) || [];

    // let exist = formData.length && 
    //     JSON.parse(localStorage.getItem('formData')).some(data => 
    //         data.email.toLowerCase() == email.toLowerCase() 
    //     );

    

    // if(!exist){
    //     formData.push({ fname, lname, email, pwd, genero, idiomas });
        
    //     document.querySelector('form').reset();
    //     document.getElementById('fname').focus();
    //     alert("Cuenta creada.\n\nPor favor, vuelva atrás para loguearse.");
    // }
    // else{
    //     alert("Ya hay una cuenta creada!");
    // }
    
}

function signIn(e) {
    e.preventDefault();
    let email = document.getElementById('email').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Sus credenciales no son las adecuadas");
    }
    else{
        location.href = "datos.html";
    }
    
}

//Función para ver que el correo tiene el formato correcto
function validarCorreo() {
   
    let emailRecibido = document.getElementById("email").value;
  
    let validarEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (emailRecibido.match(validarEmail)) {

      document.getElementById("validarEmail").innerHTML = "";
    } else {
      document.getElementById("validarEmail").style.color = "#FF0000";
      document.getElementById("validarEmail").innerHTML =
        "Debe ingresar un correo v&aacutelido";
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


  //Función para cambiar el color de los botones

  function cambiarColorBoton (id){

    /*Con esto cambiamos los colores de los buttons al posicionarnos sobre ellos y salir*/

    document.getElementById(id).style.backgroundColor = "red";
 
  }

  function colorOriginal (id){

    document.getElementById(id).style.backgroundColor = "";

  }

  //Funciones para las cookies
