import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Component Security Tests', () => {
  test('CVV field in PaymentForm uses password input type to prevent shoulder surfing', () => {
    const mockCardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111111',
      expDate: '12/26',
      cvv: '123',
    };
    const mockChangeCardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeCardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Credit card number in Review component is masked showing only last 4 digits', () => {
    const mockCardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111111',
      expDate: '12/26',
      cvv: '123',
    };
    const mockAddress = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA',
    };
    const mockCart = [
      {
        product: [
          { id: '1', title: 'Test Product', Brand: 'Test Brand', price: '99.99' },
        ],
      },
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    expect(getByText(/•••• •••• •••• 1111/)).toBeInTheDocument();
    expect(queryByText('4111111111111111')).not.toBeInTheDocument();
  });
});
