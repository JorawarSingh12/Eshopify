import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('PaymentForm security', () => {
  test('CVV input is configured as password type and required', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('#cvv');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.hasAttribute('required')).toBe(true);
  });

  test('Review component masks full credit card number', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123',
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 St',
      city: 'City',
      zip: '12345',
      country: 'Country',
    };
    const cart = [{ product: [] }];

    const { queryByText, getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be rendered in cleartext
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number should be present
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
