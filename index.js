function getKey() {
  return document.getElementById("key");
}

function setKey(key) {
  const keyElem = document.getElementById("key");
  keyElem._key = key;
  const decoder = new TextDecoder("utf-8");
  keyElem.value = decoder.decode(key));
}

async function generateKey() {
  const keyProps = {name: "AES-CBC", length: 128};
  const key = await window.crypto.subtle.generateKey(keyProps, true, ["encrypt", "decrypt"]);
  const keyBuffer = await window.crypto.subtle.exportKey("raw", key);
  setKey(new Uint8Array(keyBuffer));
}

function getSalt() {
  return document.getElementById("salt");
}

function setSalt(salt) {
  const saltElem = document.getElementById("salt");
  saltElem._salt = salt;
  const decoder = new TextDecoder("utf-8");
  saltElem.value = decoder.decode(salt));
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
  const salt = getSalt()._salt;
  const encryptProps = {name: "AES-CBC", iv: salt};
  
  const key = getKey()._key;
  const text = getText();
  const encrypted = await window.crypto.subtle.encrypt(encryptProps, key, text);
  setEncrypted(encrypted);
}
