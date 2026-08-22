import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV input with type="password"', () => {
  const cardDetails = {
    cardName: '',
    cardNumber: '',
    expDate: '',
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).not.toBeNull();
  expect(cvvInput).toHaveAttribute('type', 'password');
});
