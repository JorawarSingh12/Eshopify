import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security checks', () => {
  test('CVV field has type="password"', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111222233334444',
      expDate: '12/26',
      cvv: '123'
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'USA'
    };
    const cart = [{ product: [{ id: '1', title: 'Product 1', Brand: 'Brand X', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('**** **** **** 4444')).toBeInTheDocument();
    expect(queryByText('4111222233334444')).not.toBeInTheDocument();
  });
});
