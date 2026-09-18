import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security Tests', () => {
  test('CVV field has password type and required attributes', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const { container } = render(<PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />);

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('required');
    expect(cvvInput).toHaveAttribute('id', 'cvv');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25' };
    const address = { firstName: 'John', lastName: 'Doe', address1: '123 St', city: 'City', zip: '12345', country: 'Country' };
    const cart = [{ product: [{ id: 1, title: 'Item 1', Brand: 'Brand', price: '10' }] }];

    const { getByText, queryByText } = render(<Review cardDetails={cardDetails} address={address} cart={cart} />);

    expect(getByText(/•••• •••• •••• 5678/)).toBeInTheDocument();
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
