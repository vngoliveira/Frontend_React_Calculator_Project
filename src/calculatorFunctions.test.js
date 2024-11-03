import { handleButtonClick, deleteLastNumber, deleteAll, calculateResult } from './calculatorFunctions';

describe('Calculator Functions', () => {
  
  describe('handleButtonClick', () => {
    it('should add number to input value', () => {
      const inputValue = '2';
      const valueToAdd = '+';
      expect(handleButtonClick(valueToAdd, inputValue)).toBe('2+');
    });

    it('should not allow consecutive operators', () => {
      const inputValue = '2+';
      const valueToAdd = '+';
      expect(handleButtonClick(valueToAdd, inputValue)).toBe('2+');
    });

    it('should allow adding a number after an operator', () => {
      const inputValue = '2+';
      const valueToAdd = '3';
      expect(handleButtonClick(valueToAdd, inputValue)).toBe('2+3');
    });
  });

  describe('deleteLastNumber', () => {
    it('should remove the last character', () => {
      const inputValue = '1234';
      expect(deleteLastNumber(inputValue)).toBe('123');
    });

    it('should return an empty string if input is empty', () => {
      const inputValue = '';
      expect(deleteLastNumber(inputValue)).toBe('');
    });
  });

  describe('deleteAll', () => {
    it('should return an empty string', () => {
      expect(deleteAll()).toBe('');
    });
  });

  describe('calculateResult', () => {
    it('should return the result of a valid expression', () => {
      const inputValue = '2+2';
      expect(calculateResult(inputValue)).toBe('4');
    });

    it('should throw an error for an invalid expression', () => {
      const inputValue = '2+/2';
      expect(() => calculateResult(inputValue)).toThrow('Erro: Cálculo inválido');
    });

    it('should throw an error for division by zero', () => {
      const inputValue = '1/0';
      expect(() => calculateResult(inputValue)).toThrow('Erro: Cálculo inválido');
    });
  });
});
