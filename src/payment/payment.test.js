import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field in PaymentForm has type="password"', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/28',
      cvv: '123',
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Credit card number in Review component is masked', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/28',
      cvv: '123',
    };
    const address = {
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA',
      firstName: 'Jane',
      lastName: 'Doe',
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Test Product', Brand: 'Test Brand', price: '10.00' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('XXXX-XXXX-XXXX-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
  });
});
