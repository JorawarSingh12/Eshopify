import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security Tests', () => {
  test('PaymentForm CVV field has type="password" and maxLength constraint', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: ''
    };
    const { container } = render(<PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />);
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      zip: '12345',
      country: 'USA'
    };
    const cart = [{
      product: [{ id: '1', title: 'Test Item', Brand: 'Test', price: 10 }]
    }];

    const { getByText } = render(<Review cardDetails={cardDetails} address={address} cart={cart} />);
    expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();
  });
});
