import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security', () => {
  test('CVV field uses password type to mask sensitive input', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '123' };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = { firstName: 'Jane', lastName: 'Doe', address1: '123 St', city: 'City', zip: '12345', country: 'US' };
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Test', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    expect(getByText('XXXX-XXXX-XXXX-5678')).toBeInTheDocument();
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();
  });
});
