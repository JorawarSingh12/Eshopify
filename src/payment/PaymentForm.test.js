import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security', () => {
  const dummyCardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/28',
    cvv: '123',
  };

  test('renders CVV field with type="password" to protect against shoulder surfing', () => {
    const { container } = render(
      <PaymentForm cardDetails={dummyCardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('autocomplete')).toBe('cc-csc');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
  });
});
