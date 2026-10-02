import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  const mockCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };

  test('CVV field has type="password" and secure input attributes', () => {
    const { container } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('id')).toBe('cvv');
    expect(cvvInput.getAttribute('autocomplete')).toBe('cc-csc');
    expect(cvvInput.getAttribute('maxlength')).toBe('4');
    expect(cvvInput).toHaveAttribute('required');
  });

  test('Credit card number is masked in order review display', () => {
    const mockAddress = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'US'
    };
    const mockCart = [
      {
        product: [{ id: '1', title: 'Sample Item', Brand: 'Brand', price: '99' }]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
