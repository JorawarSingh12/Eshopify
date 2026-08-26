import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field uses input type="password" to mask sensitive CVV', () => {
    const cardDetails = { cardName: 'Jane Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks full credit card number showing only last 4 digits', () => {
    const cardDetails = { cardName: 'Jane Doe', cardNumber: '4111111111111111', expDate: '12/25', cvv: '123' };
    const address = { firstName: 'Jane', lastName: 'Doe', address1: '123 Main St', city: 'City', zip: '12345', country: 'Country' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'BrandX', price: '10.00' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-1111')).toBeInTheDocument();
    expect(queryByText('4111111111111111')).not.toBeInTheDocument();
  });
});
