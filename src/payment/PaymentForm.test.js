import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field has type="password" and secure input attributes', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toBeRequired();
    expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });

  test('Review component masks credit card number to show only last 4 digits', () => {
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
      city: 'Anytown',
      zip: '12345',
      country: 'USA',
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Product 1', Brand: 'Brand A', price: '10.00' },
        ],
      },
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be rendered
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number should be rendered
    expect(getByText('XXXX-XXXX-XXXX-5678')).toBeInTheDocument();
  });
});
