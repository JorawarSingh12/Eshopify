import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security Tests', () => {
  test('renders CVV field with type="password" to protect sensitive security code', () => {
    const mockCardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const mockChangeHandler = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeHandler} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });
});
