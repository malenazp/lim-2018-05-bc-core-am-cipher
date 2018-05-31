window.cipher = {//Se declara objeto global windows con su propiedad cipher
  encode:(offset, string)=>{//Se declara la funcion encode con parámetros offset y string
      let textoArray = string.split("");//Usamos el método split para dividir un objeto tipo string en un array
      let textoCifrado ="";//variable let que dará resultado del texto cifrado
      for(let i = 0; i < textoArray.length; i++) {//Creamos el bucle para declarando la variable let i para ejecutar la sentencia
        let textoAscii = textoArray[i].charCodeAt(0);//Declaramos variable que nos da el número de la letra ASCII
        if(textoAscii >= 65 && textoAscii <= 90) {//Se da la condición if de mayúsculas para ejecutar la sentencia de cifrado
          textoCifrado += String.fromCharCode((textoAscii - 65 + offset) % 26 + 65);}
        else if (textoAscii >= 97 && textoAscii <= 122) {//Se da la condición else if de minúsculas para ejecutar la sentencia de cifrado
          textoCifrado += String.fromCharCode((textoAscii - 97 + offset) % 26 + 97);}
        else {//Else nos permite omitir espacios y otros signos de puntuación
          textoCifrado += textoArray[i];}
      }
    return textoCifrado;}, //resultado cifrado

  decode:(offset, string)=>{//Se declara la funcion decode con parámetros offset y string
    let textoArray = string.split("");//Usamos el método split para dividir un objeto tipo string en un array
    let textoDecifrado ="";//variable let que dará resultado del texto decifrado
    for(let i = 0; i < textoArray.length; i++) {//Creamos el bucle para declarando la variable let i para ejecutar la sentencia
      let textoAscii = textoArray[i].charCodeAt(0);//Declaramos variable que nos da el número de la letra ASCII
      if(textoAscii >= 65 && textoAscii <= 90) {//Se da la condición if de mayúsculas para ejecutar la sentencia de decifrado
        textoDecifrado += String.fromCharCode(90 - (90 - textoAscii + offset) % 26);}
      else if (textoAscii >= 97 && textoAscii <= 122) {//Se da la condición else if de minúsculas para ejecutar la sentencia de decifrado
        textoDecifrado += String.fromCharCode(122 - (122 - textoAscii + offset) % 26);}
      else {//Else nos permite omitir espacios y otros signos de puntuación
        textoDecifrado += textoArray[i];}
      }
  return textoDecifrado;//resultado decifrado
  },
  cipherWithOffset(offset) {//Función recibe offset y devuelve objetos con métodos encode y decode
    return window.ciphering = {
      encode(string){return cipher.encode(offset, string);},//Método encode llamado en el resultado del index.js
      decode(string){return cipher.decode(offset, string);}//Método decode llamado en el resultado del index.js
    };
    }
};//Cierre del objeto global
