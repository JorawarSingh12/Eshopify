import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security tests', () => {
  test('CVV input is configured with password type and required attribute', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('required');
  });

  test('Review component masks credit card number showing only last 4 digits', () => {
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
    const cart = [
      {
        product: [
          { id: '1', title: 'Test Product', Brand: 'Brand', price: '10.00' },
        ],
      },
    ];
    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
  });
});
