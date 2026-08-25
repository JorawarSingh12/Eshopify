import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Component Security Tests', () => {
  test('CVV field in PaymentForm uses password input type to prevent shoulder surfing', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25'
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Review component masks credit card number to display only last 4 digits', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25'
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Sample Product', Brand: 'Brand A', price: '10.00' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be in the rendered output
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number showing only last 4 digits should be present
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
