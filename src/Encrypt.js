import { AES } from "crypto-js";
import { useState } from "react";
const Encrypt = () => {
  const [textToEncrypt, setTextToEncrypt] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [key, setKey] = useState("");
  const handleEncrypt = () => {
    if (!key) {
      alert("Encryption key not set");
      return;
    }

    const encrypted = AES.encrypt(textToEncrypt, key).toString();
    setEncryptedText(encrypted);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Password copied to clipboard!");
  };
  return (
    <div className="home">
      {" "}
      <h2>Encryption Key:</h2>
      <input
        type="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <h2>Encrypt:</h2>
      <input
        type="text"
        value={textToEncrypt}
        onChange={(e) => setTextToEncrypt(e.target.value)}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      {encryptedText && (
        <div>
          <h3>Encrypted Text:</h3>
          <pre>{encryptedText}</pre>
          <button onClick={() => handleCopy(encryptedText)}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default Encrypt;
