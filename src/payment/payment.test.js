import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security Tests', () => {
  test('CVV field in PaymentForm is rendered with type="password"', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '123' };
    const changecardDetails = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Credit card number in Review component is masked and does not expose full number', () => {
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
      city: 'Metropolis',
      zip: '12345',
      country: 'USA',
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Test Laptop', Brand: 'TestBrand', price: '999.99' },
        ],
      },
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Should NOT expose the raw card number
    expect(queryByText('1234567812345678')).toBeNull();
    // Should display the masked card number ending in 5678
    expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();
  });
});
