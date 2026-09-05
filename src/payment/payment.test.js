import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('PaymentForm CVV field has type="password"', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const changecardDetails = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'USA',
    };
    const cart = [{ product: [] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full credit card number should not be in the rendered DOM
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number showing only last 4 digits should be present
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
