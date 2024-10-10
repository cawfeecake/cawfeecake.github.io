function getKey() {
  const input = document.getElementById("key");
  return input.value;
}

function setKey(key) {
  document.getElementById("key").value = key;
}

async function generateKey() {
  const keyProps = {name: "AES-CBC", length: 128};
  const key = await window.crypto.subtle.generateKey(keyProps, true, ["encrypt", "decrypt"]);
  const keyBuffer = await window.crypto.subtle.exportKey("raw", key);
  setKey(new Uint8Array(keyBuffer));
}

function getSalt() {
  const input = document.getElementById("salt");
  return input.value;
}

function setSalt(salt) {
  document.getElementById("salt").value = salt;
}

function generateSalt() {
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  setSalt(salt);
}

function getText() {
  const textbox = document.getElementById("text");
  const text = textbox.value;
  const encoder = new TextEncoder();
  return encoder.encode(text);
}

function setEncrypted(encrypted) {
  const encryptedDisplay = document.getElementById("encrypted");
  encryptedDisplay.innerText = encrypted;
}

async function encrypt() {
  const salt = getSalt();
  const encryptProps = {name: "AES-CBC", iv: salt};
  
  const key = getKey();
  const text = getText();
  const encrypted = await window.crypto.subtle.encrypt(encryptProps, key, text);
  setEncrypted(encrypted);
}
