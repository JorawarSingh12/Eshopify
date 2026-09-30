import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV field with type="password" and input attributes for security', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567890123456',
    expDate: '12/25',
    cvv: '123',
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).not.toBeNull();
  expect(cvvInput.getAttribute('type')).toBe('password');
  expect(cvvInput.getAttribute('maxLength')).toBe('4');
  expect(cvvInput.value).toBe('123');
});
