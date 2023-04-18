import CryptoJS, { AES } from "crypto-js";
import { useState } from "react";
const Decrypt = () => {
  const [textToDecrypt, setTextToDecrypt] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [key, setKey] = useState("");
  const handleDecrypt = () => {
    if (!key) {
      alert("Decryption key not set");
      return;
    }

    try {
      const decrypted = AES.decrypt(textToDecrypt, key).toString(
        CryptoJS.enc.Utf8
      );
      setDecryptedText(decrypted);
    } catch (error) {
      alert("Error decrypting message: " + error.message);
    }
  };
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Password copied to clipboard!");
  };
  return (
    <div className="home">
      <h2>Decryption Key:</h2>
      <input
        type="password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <h2>Decrypt:</h2>
      <input
        type="text"
        value={textToDecrypt}
        onChange={(e) => setTextToDecrypt(e.target.value)}
      />
      <button onClick={handleDecrypt}>Decrypt</button>
      {decryptedText && (
        <div>
          <h3>Decrypted Text:</h3>
          <pre>{decryptedText}</pre>
          <button onClick={() => handleCopy(decryptedText)}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default Decrypt;
