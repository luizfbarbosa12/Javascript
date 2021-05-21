function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta inválida");
          return;
        }
        this.display.value = conta;
      } catch (event) {
        alert("Conta Invalida");
        return;
      }
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      //this-> calculadora
      document.addEventListener("click", (event) => {
        const element = event.target;
        if (element.classList.contains("btn-num")) {
          this.btnParaDisplay(element.innerText);
        }

        if (element.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (element.classList.contains("btn-del")) {
          this.apagaUm();
        }

        if (element.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
