import { fireEvent, screen } from '@testing-library/react';

export const enterTextInto = (elementId, text) => {
  fireEvent.change(screen.getByTestId(elementId), { target: { value: text } });
}

export const pressEnterKeyFor = (elementId) => {
  const ENTER_KEY = { key: 'Enter', code: 13, charCode: 13 };
  fireEvent.keyPress(screen.getByTestId(elementId), ENTER_KEY);
};

export const clickButtonById = (elementId) => {
  screen.getByTestId(elementId).click();
};

export const clickButtonByText = (elementId) => {
  screen.getByText(elementId).click();
};