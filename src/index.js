document.getElementById('texto').addEventListener("change", textoModificado);
//Llamando ID 'texto' del recuadro de html y addEventListener tipo change para texto modificado
function textoModificado() {//Llamando al texto ingresado, obtengo su valor
  string = document.getElementById('texto').value;}

document.getElementById('clave').addEventListener("change", offsetModificado);
//Llamando ID 'clave' del recuadro de html y addEventListener tipo change para offset modificado
function offsetModificado() {//Llamando al offset ingresado, obtengo su valor
  offset = parseInt(document.getElementById('clave').value)%26;}

document.getElementById('cifrando').addEventListener("click", ciframe);
//Llamando ID 'cifrando' del botón de html y addEventListener tipo click para ejecutar función cifrar
function ciframe() {//Function pulled from cipherWithOffset para el resultado
  document.getElementById('resultado').innerHTML = (cipher.cipherWithOffset(offset)).encode(string);}

document.getElementById('decifrando').addEventListener("click", desciframe);
//Llamando ID 'resultado' del botón de html y addEventListener tipo click para ejecutar función cifrar
function desciframe() {//Function pulled from cipherWithOffset para el resultado
  document.getElementById('resultado').innerHTML = (cipher.cipherWithOffset(offset)).decode(string);}

let string, offset;
