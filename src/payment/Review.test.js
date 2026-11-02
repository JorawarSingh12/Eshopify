import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review component payment security', () => {
  const dummyAddress = {
    address1: '123 Test St',
    city: 'Test City',
    zip: '12345',
    country: 'Test Country',
    firstName: 'Jane',
    lastName: 'Doe',
  };

  const dummyCardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111114321',
    expDate: '10/26',
    cvv: '123',
  };

  const dummyCart = [
    {
      product: [
        {
          id: 'item1',
          title: 'Laptop',
          Brand: 'Dell',
          price: '999',
        },
      ],
    },
  ];

  test('masks credit card number and never displays full primary account number', () => {
    const { getByText, queryByText } = render(
      <Review address={dummyAddress} cardDetails={dummyCardDetails} cart={dummyCart} />
    );

    // Full card number should NOT be rendered in the document
    expect(queryByText('4111111111114321')).toBeNull();

    // Masked card number showing only last 4 digits should be rendered
    expect(getByText(/•••• •••• •••• 4321/)).toBeInTheDocument();
  });
});
