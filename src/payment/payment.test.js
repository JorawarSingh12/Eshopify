import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV input field uses password type to prevent shoulder surfing', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Review component masks full credit card number showing only last 4 digits', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA'
    };
    const cart = [{ product: [{ id: '1', title: 'Test Product', price: '10.00', Brand: 'Test' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
