import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  // state
  const passwordRef = useRef();
  const [length, setLength] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // password copy
  const handlePasswordCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isCharacter) str += "~!@#$%^&*()_+{}|?><";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator]);

  return (
    <section className="container">
      <h1>Password Generator</h1>
      <div className="container__body">
        <input type="text" value={password} readOnly ref={passwordRef} />
        <button onClick={handlePasswordCopy}>Copy</button>
      </div>
      <div className="container__footer">
        <label htmlFor="passwordLength">
          <input
            type="range"
            id="passwordLength"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          Password({length})
        </label>

        <label htmlFor="number">
          <input
            type="checkbox"
            id="number"
            defaultChecked={isNumber}
            onChange={() => {
              setIsNumber((prev) => !prev);
            }}
          />{" "}
          Add Number
        </label>

        <label htmlFor="charter">
          <input
            type="checkbox"
            id="charter"
            defaultChecked={isCharacter}
            onChange={() => {
              setIsCharacter((prev) => !prev);
            }}
          />{" "}
          Add Charter
        </label>
      </div>
    </section>
  );
};

export default App;
