import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field has type="password"', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Review page masks credit card number showing only last 4 digits', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      zip: '12345',
      country: 'USA'
    };
    const cart = [{ product: [{ id: 1, title: 'Item 1', Brand: 'Brand A', price: 10 }] }];

    const { getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
