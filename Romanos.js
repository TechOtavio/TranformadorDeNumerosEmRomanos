numerosEmRomanos = [];
function transformador(numero) {
    while (numero >= 1000) {
      numerosEmRomanos.push("M");
      numero -= 1000;
    }

    while (numero >= 900) {
      numerosEmRomanos.push("CM")
      numero -= 900;
    }

    while (numero >= 500) {
      numerosEmRomanos.push("D");
      numero -= 500;
      }
    
    while (numero >= 400) {
      numerosEmRomanos.push("CD");
      numero -= 400;
    }

    while (numero >= 100) {
      numerosEmRomanos.push("C");
      numero -= 100;
    }

    while (numero >= 90) {
      numerosEmRomanos.push("XC");
      numero -= 90;
    }

    while (numero >= 50) {
      numerosEmRomanos.push("L");
      numero -= 50;
    }

    while (numero >= 40) {
      numerosEmRomanos.push("XL");
      numero -= 40;
    }

    while (numero >= 10) {
      numerosEmRomanos.push("X");
      numero -= 10;
    }

    while (numero == 9) {
      numerosEmRomanos.push("IX");
      numero -= 9;
    }

    while (numero >= 5) {
      numerosEmRomanos.push("V");
      numero -= 5;
    }

    while (numero == 4) {
      numerosEmRomanos.push("IV");
      numero -= 4;
    }

    while (numero >= 1) {
      numerosEmRomanos.push("I");
      numero -= 1;
    }
  return numerosEmRomanos.join("");
}

console.log(transformador());