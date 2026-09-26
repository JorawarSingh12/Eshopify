import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV input field securely as password with proper attributes', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123',
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('#cvv');
  expect(cvvInput).not.toBeNull();
  expect(cvvInput.getAttribute('type')).toBe('password');
  expect(cvvInput.hasAttribute('required')).toBe(true);
  expect(cvvInput.getAttribute('maxLength')).toBe('4');
});
