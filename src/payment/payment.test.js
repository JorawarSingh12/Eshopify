import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security and configuration tests', () => {
  test('PaymentForm CVV field should be a password input and have proper length/format restrictions', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    // Get the CVV input
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();

    // CVV must be masked as password
    expect(cvvInput).toHaveAttribute('type', 'password');

    // CVV must be required
    expect(cvvInput).toBeRequired();

    // CVV must have max length restriction of 4 or similar
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });

  test('Review component masks the credit card number and only exposes the last 4 digits', () => {
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
      city: 'Boston',
      zip: '02108',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          { id: 'p1', title: 'Product 1', Brand: 'Brand A', price: '99.99' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be in the document
    expect(queryByText('1234567812345678')).toBeNull();

    // Masked card number should be in the document
    expect(getByText('XXXX-XXXX-XXXX-5678')).toBeInTheDocument();
  });
});
