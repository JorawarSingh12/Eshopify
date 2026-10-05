import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV field with password type and security attributes', () => {
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
  expect(cvvInput).not.toBeNull();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('maxLength', '4');
  expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
});
