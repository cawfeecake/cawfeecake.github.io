function getKey() {
  const input = document.getElementById("key");
  return input.value;
}

function getText() {
  const textbox = document.getElementById("text");
  const text = textbox.value;
  const encoder = new TextEncoder();
  return encoder.encode(text);
}

function encrypt(text, key) {
  return window.crypto.subtle.encrypt({name: "RSA-OAEP"}, key, text);
}

function setEncrypted() {
  const encryptedDisplay = document.getElementById("encrypted");
  const key = getKey();
  const text = getText();
  encryptedDisplay.innerText = encrypt(text, key);
}
