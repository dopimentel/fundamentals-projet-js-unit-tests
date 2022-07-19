/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const arrayOfNumber = (param) => {
  let resultado = true;
  for (let value of param) {
    if (typeof value !== 'number') {
      resultado = false;
      break;
    }
  }
  return resultado;
};

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  if (arrayOfNumber(array)) {
    let sum = 0;
    let media;
    for (let value of array) {
      sum += value;
    }
    media = Math.round(sum / array.length);
    return media;
  }
  return undefined;
};

module.exports = average;