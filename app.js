// Selecciona los elementos del DOM necesarios para la funcionalidad
const inputText = document.querySelector("#text");
const outputText = document.querySelector("#out_text");
const btnCopyElement = document.querySelector("#copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Función para manejar la encriptación del texto
function btnEncrypt() {
  // Encripta el texto de entrada
  const encryptText = encrypt(inputText.value);
  // Muestra el texto encriptado en el textarea de salida
  outputText.value = encryptText;
  // Limpia el textarea de entrada
  inputText.value = "";

  // Ocultar la imagen
  const imgElement = document.querySelector(".output__text__img img");
  if (imgElement) {
    imgElement.style.display = "none";
  }

  // Ocultar las etiquetas <p> dentro de la clase "content"
  const paragraphs = document.querySelectorAll(".content p");
  paragraphs.forEach((p) => {
    p.style.display = "none";
  });
}

// Función que realiza la encriptación de acuerdo a un patrón específico
function encrypt(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // Convierte el texto a minúsculas
  encryptedString = encryptedString.toLowerCase();

  // Reemplaza cada letra según el patrón de encriptación
  for (let i = 0; i < matrixCode.length; i++) {
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }
  return encryptedString;
}

// Función para manejar la desencriptación del texto
function btnDecrypt() {
  const encryptText = decrypt(inputText.value);
  outputText.value = encryptText;
  inputText.value = "";

  // Ocultar la imagen
  const imgElement = document.querySelector(".output__text__img img");
  if (imgElement) {
    imgElement.style.display = "none";
  }

  // Ocultar las etiquetas <p> dentro de la clase "content"
  const paragraphs = document.querySelectorAll(".content p");
  paragraphs.forEach((p) => {
    p.style.display = "none";
  });
}

// Función que realiza la desencriptación de acuerdo al patrón inverso
function decrypt(decryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  // Convierte el texto a minúsculas
  decryptedString = decryptedString.toLowerCase();

  // Reemplaza cada patrón de encriptación con la letra correspondiente
  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptedString.includes(matrixCode[i][1])) {
      decryptedString = decryptedString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }
  return decryptedString;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function btnCopy() {
  // Habilita temporalmente el textarea si está deshabilitado
  outputText.disabled = false;
  // Selecciona el textarea existente en el documento
  const textToCopy = outputText;
  // Selecciona el texto dentro del textarea
  textToCopy.select();
  // Ejecuta el comando de copiar
  document.execCommand("copy");
  // Deshabilita nuevamente el textarea
  outputText.disabled = true;
  alert("Text copied to clipboard");
}
