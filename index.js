function getText() {
  const textbox = document.querySelector("#message");
  const text = textbox.value;
  const encoder = new TextEncoder();
  return encoder.encode(text);
}

function getTextEncrypt(key) {
  const text = getText();
  return window.crypto.subtle.encrypt({name: "RSA-OAEP"}, key, text);
}
