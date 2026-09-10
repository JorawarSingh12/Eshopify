import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Security Tests', () => {
  test('CVV input field uses password type to prevent plain text exposure', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Review component masks credit card number and does not expose full number', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '4111222233334444',
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
    const cart = [{ product: [{ id: '1', title: 'Test Product', Brand: 'Test', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be rendered in the document
    expect(queryByText('4111222233334444')).toBeNull();
    // Masked card number showing only last 4 digits should be present
    expect(getByText('xxxx-xxxx-xxxx-4444')).toBeInTheDocument();
  });
});
