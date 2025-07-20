function validarConta(expressao, resultadoEsperado) {
  const partes = expressao.split(" ");
  const num1 = Number(partes[0]);
  const operador = partes[1];
  const num2 = Number(partes[2]);

  let resultadoCalculado;

  if (operador === "+") {
    resultadoCalculado = num1 + num2;
  }
  if (operador === "-") {
    resultadoCalculado = num1 - num2;
  }
  if (operador === "*") {
    resultadoCalculado = num1 * num2;
  }
  if (operador === "/") {
    resultadoCalculado = num1 / num2;
  }

  return resultadoCalculado === resultadoEsperado;
}
