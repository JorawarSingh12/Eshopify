import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review payment details security', () => {
  it('masks the credit card number and does not display full plain text PAN', () => {
    const cardDetails = {
      cardName: 'Alice Smith',
      cardNumber: '4111222233334444',
      expDate: '12/25',
      cvv: '123',
    };
    const address = {
      firstName: 'Alice',
      lastName: 'Smith',
      address1: '123 Main St',
      city: 'City',
      zip: '12345',
      country: 'USA',
    };
    const cart = [
      {
        product: [
          {
            id: '1',
            title: 'Sample Laptop',
            Brand: 'SampleBrand',
            price: '999',
          },
        ],
      },
    ];

    const { container, queryByText, getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full credit card number should NOT appear in DOM
    expect(queryByText('4111222233334444')).toBeNull();
    // Masked version should be displayed
    expect(getByText('xxxx-xxxx-xxxx-4444')).toBeInTheDocument();
  });
});
