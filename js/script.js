function criptografar() {
  let text = document.getElementById("textToEncrypt").value;
  if (/[^a-z\s]/.test(text)) {
    alert("Erro: o texto deve conter apenas letras minúsculas e sem caracteres especiais.");
    return;
  }
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  document.getElementById("encryptedText").value = encryptedText;
}


function descriptografar() {
    let text = document.getElementById("textToEncrypt").value;
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("encryptedText").value = decryptedText;
}


function copy() {
    let textOutput = document.getElementById("encryptedText");
    textOutput.select();
    textOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Código copiaddo!");
}