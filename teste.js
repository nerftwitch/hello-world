const lista = [11, 98, 168, 11, 561, 65, 15, 15];

let acumulador = 0;

for (const numero of lista) {
  acumulador += numero;
}
console.log("a soma é", acumulador);

let oMenorNumeroAteAgora;

for (const numero of lista) {
  if (oMenorNumeroAteAgora === undefined) {
    oMenorNumeroAteAgora = numero;
  } else {
    if (oMenorNumeroAteAgora > numero) {
      oMenorNumeroAteAgora = numero;
    }
  }
}

console.log("o menor numero é", oMenorNumeroAteAgora);
