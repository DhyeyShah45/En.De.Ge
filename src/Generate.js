import React, { useState } from "react";

const Generate = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const handleIncludeSpecialCharsChange = () => {
    setIncludeSpecialChars(!includeSpecialChars);
  };

  const generatePassword = () => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{};':\",./<>?\\|";

    let validChars = lowerCase + upperCase + numbers;

    if (includeSpecialChars) {
      validChars += specialChars;
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }

    setPassword(password);
  };
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="home">
      <label htmlFor="passwordLength">Password length: </label>
      <input
        type="number"
        id="passwordLength"
        name="passwordLength"
        value={passwordLength}
        onChange={handlePasswordLengthChange}
      />
      <br />
      <input
        type="checkbox"
        id="includeSpecialChars"
        name="includeSpecialChars"
        checked={includeSpecialChars}
        onChange={handleIncludeSpecialCharsChange}
      />
      <label htmlFor="includeSpecialChars">Include special characters</label>
      <br />
      <button onClick={generatePassword}>Generate password</button>
      <br />
      {password && (
        <div>
          <h3>Password:</h3>
          <pre>{password}</pre>
          <button onClick={() => handleCopy(password)}>Copy</button>
          <h4>
            You can check the password strength at
            <a
              href="https://www.passwordmonster.com/"
              target="_blank"
              rel="noreferrer"
            >
              Password Monster
            </a>
          </h4>
        </div>
      )}
    </div>
  );
};

export default Generate;
