let entradaActual = "";
let operador = "";
let primerNumero = "";

function escribirNumero(numero) {
    entradaActual += numero;
    actualizarPantalla();
}

function escribirDecimal() {
    if (!entradaActual.includes(".")) {
        entradaActual += ".";
        actualizarPantalla();
    }
}

function establecerOp(op) {
    if (entradaActual === "") return;
    if (primerNumero !== "") calcular();
    
    operador = op;
    primerNumero = entradaActual;
    entradaActual += " " + operador + " "; 
    actualizarPantalla();
}


function calcular() {
    if (primerNumero === "" || entradaActual === "") return;

    let num1 = parseFloat(primerNumero);
    let num2 = parseFloat(entradaActual);
    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            return;
    }

    entradaActual = resultado.toString();
    operador = "";
    primerNumero = "";
    actualizarPantalla();
}

function limpiar() {
    entradaActual = "";
    operador = "";
    primerNumero = "";
    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById("display").value = entradaActual;
}
