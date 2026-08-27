import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security tests', () => {
  test('CVV input in PaymentForm has type="password" to prevent visual exposure', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number for PCI-DSS compliance', () => {
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
      city: 'City',
      zip: '12345',
      country: 'USA',
    };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Brand', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
  });
});
