import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security', () => {
  test('CVV field has type="password"', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'Country'
    };
    const cart = [{ product: [{ id: '1', title: 'Item 1', Brand: 'Brand 1', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
  });
});
