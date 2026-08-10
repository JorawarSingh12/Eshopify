import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('PaymentForm CVV is masked and configured as password type with proper constraints', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
    expect(cvvInput).toHaveAttribute('pattern', '[0-9]*');
  });

  test('Review masks full credit card number and shows only last 4 digits', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
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
    const cart = [
      {
        product: [
          {
            id: 'prod1',
            title: 'Laptop Pro',
            Brand: 'Apple',
            price: '999.99'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Ensure the full card number is NOT present in the document
    expect(queryByText('1234567890123456')).not.toBeInTheDocument();

    // Ensure the masked card number (e.g. showing last 4 digits) is present
    expect(getByText(/•••• •••• •••• 3456/)).toBeInTheDocument();
  });
});
