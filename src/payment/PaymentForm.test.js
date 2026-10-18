import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('PaymentForm and Review security tests', () => {
  test('CVV field has password type for masking sensitive input', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '123' };
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card numbers and displays only last 4 digits', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567890123456',
      expDate: '12/25',
      cvv: '123'
    };
    const address = { firstName: 'John', lastName: 'Doe', address1: '123 St', city: 'City', zip: '12345', country: 'US' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Test', price: '100' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('xxxx-xxxx-xxxx-3456')).toBeInTheDocument();
    expect(queryByText('1234567890123456')).not.toBeInTheDocument();
  });
});
