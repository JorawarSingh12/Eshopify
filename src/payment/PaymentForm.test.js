import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV as password input with security attributes', () => {
  const cardDetails = {
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  };
  const changecardDetails = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('maxlength', '4');
  expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
});
