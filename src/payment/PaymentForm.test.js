import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders CVV input with type="password"', () => {
  const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
  const changecardDetails = jest.fn();

  const { getByLabelText } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
  );

  const cvvInput = getByLabelText(/CVV/i);
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
});
