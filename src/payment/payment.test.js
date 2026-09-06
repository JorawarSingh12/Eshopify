import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('PaymentForm renders CVV input as password type', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const { container } = render(<PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />);
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number displaying only last 4 digits', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567812345678', expDate: '12/25', cvv: '123' };
    const address = { firstName: 'John', lastName: 'Doe', address1: '123 St', city: 'City', zip: '12345', country: 'US' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Brand', price: '100' }] }];

    const { getByText, queryByText } = render(<Review cardDetails={cardDetails} address={address} cart={cart} />);

    // Check that full card number is NOT displayed
    expect(queryByText('1234567812345678')).toBeNull();
    // Check that masked card number ending in last 4 digits IS displayed
    expect(getByText(/•••• •••• •••• 5678/)).toBeInTheDocument();
  });
});
