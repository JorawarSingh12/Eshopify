import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment security tests', () => {
  test('PaymentForm renders CVV input field as password type', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111222233334444',
      expDate: '01/28',
      cvv: '999',
    };
    const address = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '456 Main St',
      city: 'Metropolis',
      zip: '10001',
      country: 'USA',
    };
    const cart = [
      {
        product: [
          { id: 'item1', title: 'Sample Item', Brand: 'Brand X', price: '25.00' },
        ],
      },
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be rendered in cleartext
    expect(queryByText('4111222233334444')).toBeNull();

    // Masked card number showing only last 4 digits should be rendered
    expect(getByText('XXXX-XXXX-XXXX-4444')).toBeInTheDocument();
  });
});
