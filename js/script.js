let usuarios = [];

function agregarUsuario(usuario) {
    usuarios.push(usuario);
}

function validarUser() {
    var userInput = document.getElementById('user').value;
    var userError = document.getElementById('usererror');
    userError.textContent = '';

    if (userInput.trim() === '') {
        userError.textContent = 'El nombre de usuario no puede estar vacío.';
        return false;
    }
    return true;
}


function añadirHobbies() {
    hobbyInput = document.getElementById('hobbyInput');
    hobbyList = document.getElementById('hobbyList');
    if (hobbyInput.value.trim() !== '') {
        li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = hobbyInput.value;
        removeButton = document.createElement('button');
        removeButton.className = 'btn btn-outline-danger btn-sm';
        removeButton.textContent = 'X';
        removeButton.onclick = function() {
            hobbyList.removeChild(li);
        };
        li.appendChild(removeButton);
        hobbyList.appendChild(li);
        hobbyInput.value = '';
    }
}

function validarHobbies() {
    const hobbyList = document.getElementById('hobbyList').children;
    const hobbiesError = document.getElementById('hobbiesError');
    if (hobbyList.length < 2) {
        hobbiesError.textContent = 'Debe ingresar al menos dos aficiones.';
        return false;
    } else {
        hobbiesError.textContent = '';
        return true;
    }
}

function validarmail() {
    email = document.getElementById('email').value;
    emailError = document.getElementById('mailError');
    if (email === '') {
        emailError.textContent = 'El correo electrónico es obligatorio.';
        return false;
    } else if (!email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'El correo electrónico no es válido.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validarcontraseña() {
    password = document.getElementById('pass').value;
    passwordError = document.getElementById('PassError');
    hasLetter = /[a-zA-Z]/.test(password);
    hasDigit = /[0-9]/.test(password);
    if (password === '') {
        passwordError.textContent = 'La contraseña es obligatoria.';
        return false;
    } else if (password.length < 3 || password.length > 6) {
        passwordError.textContent = 'La contraseña debe tener entre 3 y 6 caracteres.';
        return false;
    } else if (!hasLetter || !hasDigit) {
        passwordError.textContent = 'La contraseña debe contener al menos una letra y un dígito.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function validarconfirmacioncontraseña() {
    password = document.getElementById('pass').value;
    confirmPassword = document.getElementById('confirmarPass').value;
    confirmPasswordError = document.getElementById('CpassError');
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Debe confirmar su contraseña.';
        return false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

function validardireccion() {
    address = document.getElementById('direccion').value;
    addressError = document.getElementById('direccionError');
    if (address === '') {
        addressError.textContent = 'La dirección postal es obligatoria.';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}

function validardireccionS() {
    addressS = document.getElementById('direccionS').value;
    addressError = document.getElementById('direccionSError');
    if (addressS === '') {
        addressError.textContent = 'La dirección postal es obligatoria.';
        return false;
    } else {
        addressError.textContent = '';
        return true;
    }
}

function validarcomuna() {
    const comuna = document.getElementById('comuna').value;
    const comunaError = document.getElementById('comunaError');
    if (comuna === 'comuna0') {
        comunaError.textContent = 'Debe seleccionar una comuna válida.';
        return false;
    } else {
        comunaError.textContent = '';
        return true;
    }
}

function validarnumero() {
    phone = document.getElementById('numero').value;
    phoneError = document.getElementById('numeroError');
    if (phone === '') {
        phoneError.textContent = 'El número de teléfono es obligatorio.';
        return false;
    } else if (isNaN(phone)) {
        phoneError.textContent = 'El número de teléfono debe ser numérico.';
        return false;
    } else {
        phoneError.textContent = '';
        return true;
    }
}

function validarsitio() {
    website = document.getElementById('website').value;
    websiteError = document.getElementById('WebError');
    if (website !== '' && (!website.startsWith('http://') && !website.startsWith('https://'))) {
        websiteError.textContent = 'La URL de la página web debe comenzar con http:// o https://.';
        return false;
    } else {
        websiteError.textContent = '';
        return true;
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    isEmailValid = validarmail();
    isPasswordValid = validarcontraseña();
    isConfirmPasswordValid = validarconfirmacioncontraseña();
    isAddressValid = validardireccion();
    isAddressValidD = validardireccionS();
    isComunaValid = validarcomuna();
    isPhoneValid = validarnumero();
    isWebsiteValid = validarsitio();
    isHobbiesValid = validarHobbies();
    isUserValid = validarUser();

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid && isAddressValid && isAddressValidD && isComunaValid && isPhoneValid && isWebsiteValid && isHobbiesValid && isUserValid) {
        let userInput = document.getElementById('user').value;
        let emailInput = document.getElementById('email').value;
        let passwordInput = document.getElementById('pass').value;
        let confirmPasswordInput = document.getElementById('confirmarPass').value;
        let addressInput = document.getElementById('direccion').value;
        let addressSInput = document.getElementById('direccionS').value;
        let comunaInput = document.getElementById('comuna').value;
        let phoneInput = document.getElementById('numero').value;
        let websiteInput = document.getElementById('website').value;

        let usuario = {
            nombreUsuario: userInput,
            correoElectronico: emailInput,
            contraseña: passwordInput,
            confirmarContraseña: confirmPasswordInput,
            dirección: addressInput,
            direcciónS: addressSInput,
            comuna: comunaInput,
            númeroTeléfono: phoneInput,
            páginaWeb: websiteInput
        };

        agregarUsuario(usuario);
        window.location.href = "destiny.html"
    } else {
        alert('Revise que los campos estén correctos');
    }
});


