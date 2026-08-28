import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field in PaymentForm uses type="password" and limits length to 4', () => {
    const mockCardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const mockChangeHandler = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeHandler} />
    );

    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxlength', '4');
  });

  test('Credit card number in Review component is masked showing only last 4 digits', () => {
    const mockCardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const mockAddress = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      zip: '12345',
      country: 'USA'
    };
    const mockCart = [
      {
        product: [
          { id: '1', title: 'Test Product', Brand: 'Test Brand', price: '99.99' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    // Should NOT expose full 16-digit card number in plain text
    expect(queryByText('1234567812345678')).toBeNull();

    // Should display masked card number with last 4 digits
    expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();
  });
});
