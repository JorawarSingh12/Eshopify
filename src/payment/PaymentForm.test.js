import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security', () => {
  test('CVV field has password type and security attributes', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
    expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
  });

  test('Review component masks credit card number showing only last 4 digits', () => {
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
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Brand', price: '10.00' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be in the document
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number SHOULD be in the document
    expect(getByText('•••• •••• •••• 5678')).toBeInTheDocument();
  });
});
