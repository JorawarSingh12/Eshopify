import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV field has password type and length restriction', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '123' };
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });

  test('Review component masks credit card number to show only last 4 digits', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111 1111 1111 1234',
      expDate: '12/25',
      cvv: '123',
    };
    const address = { address1: '123 Main St', city: 'City', zip: '12345', country: 'Country' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', price: '10', Brand: 'Test' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('•••• •••• •••• 1234')).toBeInTheDocument();
    expect(queryByText('4111 1111 1111 1234')).not.toBeInTheDocument();
  });
});
