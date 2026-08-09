import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field is a password input and bound to cvv value', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
      expDate: '12/25',
      cvv: '123'
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    // Find input by name cvv
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.value).toBe('123');
  });

  test('Card number is masked on display components', () => {
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
      city: 'Springfield',
      zip: '12345',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          {
            id: '1',
            title: 'Test Product',
            Brand: 'Test Brand',
            price: '10.00'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Ensure the raw/unmasked card number is NOT present in the document
    expect(queryByText('1234567890123456')).not.toBeInTheDocument();

    // Ensure the masked card number (ending in last 4 digits) IS present
    const maskedText = getByText(/xxxx-xxxx-xxxx-3456/i);
    expect(maskedText).toBeInTheDocument();
  });
});
