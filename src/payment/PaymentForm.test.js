import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field has type="password" and maxLength restriction in PaymentForm', () => {
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

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Credit card number is masked in Review component', () => {
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
      city: 'Anytown',
      zip: '12345',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Product 1', Brand: 'Brand 1', price: '10.00' }
        ]
      }
    ];

    const { queryByText, getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full unmasked card number should NOT be in the rendered DOM
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number should be present
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
