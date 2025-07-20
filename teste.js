function validarContaBugada(expressao, resultadoEsperado) {
  const partes = expressao.split(" ");
  const num1 = Number(partes[0]);
  const operador = partes[1];
  const num2 = Number(partes[2]);

  let resultadoCalculado;

  resultadoCalculado = num1 + num2;

  return resultadoCalculado === resultadoEsperado;
}

console.log(validarContaBugada("10 - 2", 8));
