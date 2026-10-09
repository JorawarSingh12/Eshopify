import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security Tests', () => {
  const dummyCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123',
  };

  it('renders CVV input with type="password" and maxLength restriction to prevent cleartext exposure', () => {
    const { container } = render(
      <PaymentForm cardDetails={dummyCardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = container.querySelector('#cvv');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
    expect(cvvInput.getAttribute('autocomplete')).toBe('cc-csc');
  });
});
