export function validarLogin(nome) {
  if (!nome || nome.trim() === "") {
    return false;
  }

  return true;
}
