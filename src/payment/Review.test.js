import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review payment security', () => {
  const dummyAddress = {
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Springfield',
    zip: '12345',
    country: 'USA',
  };

  const dummyCart = [
    {
      product: [
        {
          id: 'item-1',
          title: 'Test Product',
          Brand: 'Test Brand',
          price: '29.99',
        },
      ],
    },
  ];

  test('masks credit card number and never displays full plaintext card number', () => {
    const rawCardNumber = '4111 2222 3333 4444';
    const dummyCardDetails = {
      cardName: 'Jane Doe',
      cardNumber: rawCardNumber,
      expDate: '12/28',
      cvv: '123',
    };

    const { getByText, queryByText } = render(
      <Review address={dummyAddress} cardDetails={dummyCardDetails} cart={dummyCart} />
    );

    // Full card number must NOT appear in the rendered document
    expect(queryByText(rawCardNumber)).toBeNull();

    // Masked format with last 4 digits must appear
    expect(getByText('•••• •••• •••• 4444')).toBeInTheDocument();
  });
});
