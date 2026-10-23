import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV input with type="password" and required attribute', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).not.toBeNull();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toBeRequired();
  expect(cvvInput).toHaveAttribute('id', 'cvv');
});
