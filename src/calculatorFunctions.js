export const handleButtonClick = (value, inputValue) => {
    const operadores = ['+', '-', '*', '/'];
  
    if (operadores.includes(value) && operadores.includes(inputValue.slice(-1))) {
      return inputValue;
    }
  
    return inputValue + value;
  };
  
  export const deleteLastNumber = (inputValue) => {
    return inputValue.slice(0, -1);
  };
  
  export const deleteAll = () => {
    return "";
  };
  
  export const calculateResult = (inputValue) => {
    try {
      const result = eval(inputValue);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Cálculo inválido");
      }
      return String(result);
    } catch (error) {
      throw new Error("Erro: Cálculo inválido");
    }
  };
  