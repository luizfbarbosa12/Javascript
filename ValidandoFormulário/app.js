class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', event => {
      this.handleSubmit(event);
    })
  }

  handleSubmit(event) {
  event.preventDefault();
  const validFields = this.isValid();
  const validPasswords = this.passwordIsValid();

  if(validFields && validPasswords) {
    alert('formulario enviado')
    this.formulario.submit();
   }
  }

  passwordIsValid() {
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.createError(senha,'Campos senha e repetir senha precisam ser iguais' )
      this.createError(repetirSenha,'Campos senha e repetir senha precisam ser iguais')
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.createError(senha,'Senha precisa estar entre 6 e 12 caracteres');
    }

    return valid;
  }

  isValid() {
    let valid = true;
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let field of this.formulario.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;
      if(!field.value) {
        this.createError(field, `Field ${label} cannot be empty`);
        valid = false;
      }

      if(field.classList.contains('cpf')) {
        if(!this.validaCPF(field)) {
          valid = false;
        }
      }

      if(field.classList.contains('usuario')) {
        if(!this.validaUsuario(field)) {
          valid = false;
        }
      }
    }
    return valid;
  }

  validaUsuario(field) {
    const usuario = field.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.createError(field, "Usuario precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z-0-9]+$/g)) {
      this.createError(field, "Usuario precisa conter apenas letras e/ou numeros");
      valid = false;
    }

    return true;
  }

  validaCPF(field) {
    const cpf = new ValidaCPF(field.value);
    if(!cpf.valida()) {
      this.createError(field, 'CPF inválido')
      return false;
    }

    return true;
  }

  createError(field, message) {

    const div = document.createElement('div');
    div.innerHTML = message;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  
  }
}

const valida = new ValidaFormulario();