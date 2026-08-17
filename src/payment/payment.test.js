import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security Tests', () => {
  test('CVV field in PaymentForm has type="password"', () => {
    const mockCardDetails = { cardName: '', cardNumber: '', expDate: '' };
    const mockChangeHandler = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeHandler} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Card number in Review component is masked showing only last 4 digits', () => {
    const mockCardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25'
    };
    const mockAddress = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'USA'
    };
    const mockCart = [
      {
        product: [
          { id: '1', title: 'Test Product', Brand: 'Test', price: '10' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    // Should NOT expose full card number
    expect(queryByText('1234567812345678')).toBeNull();
    // Should display masked card number with last 4 digits
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
