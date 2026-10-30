import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV input field with password type for security masking', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567890123456',
    expDate: '12/25',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('required');
  expect(cvvInput).toHaveAttribute('id', 'cvv');
  expect(cvvInput).toHaveValue('123');
});
