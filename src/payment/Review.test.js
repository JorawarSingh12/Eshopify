import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review payment security', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/28',
    cvv: '123'
  };

  const address = {
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Market St',
    city: 'San Francisco',
    zip: '94103',
    country: 'USA'
  };

  const cart = [
    {
      product: [
        {
          id: 'item1',
          title: 'Laptop Pro',
          Brand: 'Dell',
          price: '999.99'
        }
      ]
    }
  ];

  test('masks credit card number showing only last four digits', () => {
    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be exposed
    expect(queryByText('4111111111111234')).toBeNull();

    // Masked card number should be present
    expect(getByText('••••••••••••1234')).toBeInTheDocument();
  });

  test('handles short card numbers gracefully without crash', () => {
    const shortCard = {
      ...cardDetails,
      cardNumber: '123'
    };
    const { getByText } = render(
      <Review cardDetails={shortCard} address={address} cart={cart} />
    );
    expect(getByText('123')).toBeInTheDocument();
  });
});
