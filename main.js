// VARIAVEIS GLOBAIS
let charNumber = "";
let displayValuesMulti = 0;
const links = document.querySelectorAll(".caracters");
let controle = true;

document.addEventListener("DOMContentLoaded", function (event) {
  charNumber = catchCaractersNumbers();
  showDisplay();
  clearDisplay();
  catchNumbersOnDisplay();
});

// Responsavel por armazenar todos os caracters/numbers
const catchCaractersNumbers = () => {
  let numbers = [];
  links.forEach((element) => {
    numbers.push(element.children[0].text);
  });

  return numbers;
};

// Responsavel por adicionar os caracters/numbers no display
const showDisplay = () => {
  const display = document.querySelector("#display");

  links.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let numbersForDisplay = event.target.innerText;

      if (numbersForDisplay == "=" || display.value.length == 12) {
        return false;
      } else if (
        numbersForDisplay == "." &&
        display.value.length == 0 &&
        controle == true
      ) {
        display.value = "0.";
        controle = false;
      } else if (
        numbersForDisplay == "," &&
        display.value != "" &&
        controle == true
      ) {
        display.value += ".";
        controle = false;
      } else if (numbersForDisplay == "AC") {
        controle = true;
      } else {
        if (numbersForDisplay != ".") {
          display.value += numbersForDisplay;
        } else if (numbersForDisplay == "." && controle == true) {
          display.value += numbersForDisplay;
        }
      }
    });
  });

  display.addEventListener("input", function (event) {
    display.value = event.target.value.replace(/\D+/g, "");
  });
};

// Responsavel por limpar o display
const clearDisplay = () => {
  const clearAC = document.querySelector("#AC").id;

  links.forEach((element) => {
    element.addEventListener("click", function (event) {
      let numbersForDisplay = event.target.innerText;
      if (numbersForDisplay == clearAC) {
        document.querySelector("#display").value = "";
      }
    });
  });
};

// Responsavel por pegar os valores do display e mandar para as funcoes de calculos (calculateAll)
const catchNumbersOnDisplay = () => {
  const equals = document.querySelector("#equals");

  equals.addEventListener("click", function (event) {
    const display = document.querySelector("#display").value;
    if (display !== "") {
      if (display.includes("+") == true) {
        let arr = display.split("+");

        const arrayDeNumeros = arr.map((stringNumero) => {
          return parseFloat(stringNumero);
        });

        displayValuesMulti = 0;
        arrayDeNumeros.forEach((el, indice, array) => {
          if (indice !== 0) {
            displayValuesMulti += el;
          }
        });
        const valueA = Number(display.split("+")[0]);
        const valueB = displayValuesMulti;

        calculateAll.somar(valueA, valueB);
      }
    }
    // fazer o resto da condicao
    // else if (display.includes("-") == true) {
    //   const valueA = Number(display.split("-")[0]);
    //   const valueB = Number(display.split("-")[1]);

    //   calculateAll.subtrair(valueA, valueB);
    // } else if (display.includes("/") == true) {
    //   const valueA = Number(display.split("/")[0]);
    //   const valueB = Number(display.split("/")[1]);

    //   calculateAll.dividir(valueA, valueB);
    // } else if (display.includes("X") == true) {
    //   const valueA = Number(display.split("X")[0]);
    //   const valueB = Number(display.split("X")[1]);

    //   calculateAll.multiplicar(valueA, valueB);
    // } else if (display.includes("%") == true) {
    //   const valueA = Number(display.split("%")[0]);

    //   calculateAll.porcentagem(valueA);
    // } else if (display.includes("&") == true) {
    //   const valueA = Number(display.split("&")[0]);

    //   calculateAll.multXmult(valueA);
    // }
  });
};

// Responsavel por fazer os calculos
const calculateAll = {
  somar: (a, b) => {
    const display = document.querySelector("#display");
    let soma = 0;
    soma = a + b;
    return (display.value = soma);
  },
  subtrair: (a, b) => {
    const display = document.querySelector("#display");
    let sub = 0;
    sub = a - b;
    return (display.value = sub);
  },
  dividir: (a, b) => {
    const display = document.querySelector("#display");
    let div = 0;
    div = a / b;
    return (display.value = div);
  },
  multiplicar: (a, b) => {
    const display = document.querySelector("#display");
    let mult = 0;
    mult = a * b;
    return (display.value = mult);
  },
  porcentagem: (a) => {
    const display = document.querySelector("#display");
    let porc = 0;
    porc = a / 100;
    return (display.value = porc);
  },
  multXmult: (a) => {
    const display = document.querySelector("#display");
    let calc = 0;
    calc = a * a;
    return (display.value = calc);
  },
};
