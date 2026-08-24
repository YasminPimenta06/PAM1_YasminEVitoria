export function realizarCalculo( numero1, numero2, operacao,
setResultado) {

const n1 = Number(numero1);
const n2 = Number(numero2);

switch (operacao) {
case '+':
setResultado(n1 + n2);
break;
case '-':
setResultado(n1 - n2);
break;
case '*':
setResultado(n1 * n2);
break;
case '/':
setResultado(n1 / n2);
break;
default:
setResultado('Operação inválida');
}
}