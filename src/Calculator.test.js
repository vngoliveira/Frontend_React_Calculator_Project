import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  test('initial render shows empty input', () => {
    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("");
  });

  test('handles button clicks correctly', () => {
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const button2 = screen.getByText("2");
    const buttonEquals = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);

    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("3");
  });

  test('does not allow consecutive operators', () => {
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const buttonMinus = screen.getByText("-");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonMinus);

    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("1+");
  });

  test('deletes last character', () => {
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const buttonDelete = screen.getByText("[x]");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonDelete);

    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("1");
  });

  test('clears input when delete all button is clicked', () => {
    const button1 = screen.getByText("1");
    const buttonDeleteAll = screen.getByText("[C]");

    fireEvent.click(button1);
    fireEvent.click(buttonDeleteAll);

    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("");
  });

  test('displays error message for invalid calculations', () => {
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const buttonEquals = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEquals);

    const errorMessage = screen.getByText(/Erro: Cálculo inválido/i);
    expect(errorMessage).toBeInTheDocument(); 
  });

  test('calculates correctly with parentheses', () => {
    const button1 = screen.getByText("1");
    const buttonPlus = screen.getByText("+");
    const button2 = screen.getByText("2");
    const buttonMultiply = screen.getByText("*");
    const button3 = screen.getByText("3");
    const buttonEquals = screen.getByText("=");

    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button2);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button3);
    fireEvent.click(buttonEquals);

    const input = screen.getByPlaceholderText("0");
    expect(input.value).toBe("7");
  });
});
