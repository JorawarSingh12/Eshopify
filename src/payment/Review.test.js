import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review security', () => {
  const dummyProps = {
    cardDetails: {
      cardName: 'Jane Doe',
      cardNumber: '4111111111111234',
      expDate: '12/28',
      cvv: '123'
    },
    address: {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Metropolis',
      zip: '12345',
      country: 'USA'
    },
    cart: [
      {
        product: [
          {
            id: 'item1',
            title: 'Sample Phone',
            Brand: 'SampleBrand',
            price: '499.99'
          }
        ]
      }
    ]
  };

  test('masks credit card number to only show last 4 digits on review page', () => {
    const { getByText, queryByText } = render(<Review {...dummyProps} />);

    // Full card number should NOT be visible in the DOM
    expect(queryByText('4111111111111234')).toBeNull();

    // Masked format with last 4 digits should be present
    expect(getByText(/•••• •••• •••• 1234/)).toBeInTheDocument();
  });
});
