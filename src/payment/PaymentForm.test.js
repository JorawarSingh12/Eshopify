import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security tests', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };
  const changecardDetails = jest.fn();

  test('renders CVV field with password type and security attributes', () => {
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('autocomplete')).toBe('cc-csc');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
    expect(cvvInput).toHaveAttribute('required');
  });
});
