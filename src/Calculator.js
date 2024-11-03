import React, { useState } from 'react';
import { handleButtonClick, deleteLastNumber, deleteAll, calculateResult } from './calculatorFunctions';

function Calculator() {
  const [inputValue, setInputValue] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");

  const onButtonClick = (value) => {
    const newInputValue = handleButtonClick(value, inputValue);
    setInputValue(newInputValue);
    setErrorMessage("");
  };

  const onDeleteLastNumber = () => {
    const newInputValue = deleteLastNumber(inputValue);
    setInputValue(newInputValue);
    setErrorMessage("");
  };

  const onDeleteAll = () => {
    const newInputValue = deleteAll();
    setInputValue(newInputValue);
    setErrorMessage("");
  };

  const onCalculateResult = () => {
    try {
      const result = calculateResult(inputValue);
      setInputValue(result);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="input">
        <input type="text" value={inputValue} readOnly placeholder="0" />
      </div>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div className="numbers">
        <button onClick={onDeleteLastNumber} id="delete">[x]</button>
        <button onClick={() => onButtonClick("+")} className="insert">+</button>
        <button onClick={() => onButtonClick("-")} className="insert">-</button>
        <button onClick={() => onButtonClick("*")} className="insert">*</button>
        <button onClick={() => onButtonClick("1")} className="insert">1</button>
        <button onClick={() => onButtonClick("2")} className="insert">2</button>
        <button onClick={() => onButtonClick("3")} className="insert">3</button>
        <button onClick={() => onButtonClick("/")} className="insert">/</button>
        <button onClick={() => onButtonClick("4")} className="insert">4</button>
        <button onClick={() => onButtonClick("5")} className="insert">5</button>
        <button onClick={() => onButtonClick("6")} className="insert">6</button>
        <button onClick={() => onButtonClick("(")} className="insert">(</button>
        <button onClick={() => onButtonClick("7")} className="insert">7</button>
        <button onClick={() => onButtonClick("8")} className="insert">8</button>
        <button onClick={() => onButtonClick("9")} className="insert">9</button>
        <button onClick={() => onButtonClick(")")} className="insert">)</button>
        <button onClick={onDeleteAll} id="deleteAll">[C]</button>
        <button onClick={() => onButtonClick("0")} className="insert">0</button>
        <button onClick={() => onButtonClick(".")} className="insert">.</button>
        <button onClick={onCalculateResult} id="equals">=</button>
      </div>
    </div>
  );
}

export default Calculator;
