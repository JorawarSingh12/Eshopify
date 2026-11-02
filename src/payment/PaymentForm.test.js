import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security', () => {
  const dummyCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/28',
    cvv: '',
  };

  test('CVV field is rendered as password type to prevent shoulder-surfing', () => {
    const { container } = render(
      <PaymentForm cardDetails={dummyCardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
    expect(cvvInput).toHaveAttribute('autoComplete', 'cc-csc');
  });
});
