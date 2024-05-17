//Atualização
function integerToRoman(number){
  let numerosEmRomanos = "";

  const romanToNumber = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
  ]
  for (let i = 0; i < romanToNumber.length; i++){
      while(number >= romanToNumber[i][1]){
          numerosEmRomanos += romanToNumber[i][0];
          number -= romanToNumber;
      }
  }
  numerosEmRomanos(2534);
  return numerosEmRomanos;
}
