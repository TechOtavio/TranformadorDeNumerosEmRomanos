// Função para converter romanos em números normais
function romanToNumber(roman) {
    let number = 0;
  
    const romanToNumberMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    for (let i = 0; i < roman.length; i++) {
      let currentChar = roman[i];
      let nextChar = roman[i + 1];
  
      if (nextChar && romanToNumberMap[currentChar + nextChar]) {
        number += romanToNumberMap[currentChar + nextChar];
        i++; // pula o próximo caractere
      } else {
        number += romanToNumberMap[currentChar];
      }
    }
  
    return number;
  }
  
