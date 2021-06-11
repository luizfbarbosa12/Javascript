class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }
  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.validFields();
  }

  validFields() {
    let valid = true;

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      if (!campo.value) {
        this.createError(campo, "Campo tal não pode estar em branco");
        valid = false;
      }
    }
  }

  createError(campo, mensagem) {
    const div = document.createElement("div");
    div.innerHTML = mensagem;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
