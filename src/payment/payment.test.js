import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security checks', () => {
  test('CVV input field uses password type to prevent plain text exposure', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
  });

  test('Credit card number is masked in Review component', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Anytown',
      zip: '12345',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Product 1', Brand: 'Brand 1', price: '10.00' }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be visible
    expect(queryByText('1234567812345678')).toBeNull();
    // Masked card number should be present
    expect(getByText('xxxx-xxxx-xxxx-5678')).toBeInTheDocument();
  });
});
