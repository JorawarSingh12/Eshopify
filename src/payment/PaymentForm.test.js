import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV field as password input with proper security attributes', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111111',
    expDate: '12/25',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  const { getByLabelText } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = getByLabelText(/CVV/i);
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('maxLength', '4');
  expect(cvvInput.value).toBe('123');
});
