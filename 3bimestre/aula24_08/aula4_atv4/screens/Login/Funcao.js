export function verificarLogin(usuario, senha) {
if (usuario === 'admin' && senha === 'admin') {
return true;
}
return false;
}