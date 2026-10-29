import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security Tests', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111111',
    expDate: '12/25',
    cvv: '123'
  };

  test('CVV field has type="password" to mask sensitive CVV digits', () => {
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('CVV field limits input length to max 4 characters', () => {
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });
});
