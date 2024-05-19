function calcular_imc() {

  let peso = +document.getElementById("peso").value;
  let altura = +document.getElementById("altura").value;
  let imc = peso / altura ** 2;
  if (imc <= 18.5) {

    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}, você está abaixo do peso!`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}, você está com o peso normal!`;
  } else if (imc >= 25 && imc <= 29.99) {
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}, você está com sobrepeso!`;
  } else if (imc >= 30 && imc <= 39.99) {
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}, você está com obesidade!`;
  } else if (imc >= 40) {
    document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )}, você está com obesidade grave!`;
  }
}

function mascara() {
  $("#peso").mask("000");
  $("#altura").mask("0.00");
}
