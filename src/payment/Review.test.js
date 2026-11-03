import React from 'react';
import { render } from '@testing-library/react';
import Review from './Review';

describe('Review payment summary security', () => {
  const mockAddress = {
    firstName: 'Jane',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'Metropolis',
    zip: '12345',
    country: 'USA'
  };

  const mockCart = [
    {
      product: [
        { id: 'prod1', title: 'Test Product', Brand: 'TestBrand', price: '99.99' }
      ]
    }
  ];

  test('masks credit card PAN and does not display full card number', () => {
    const cardDetails = {
      cardName: 'Jane Doe',
      cardNumber: '4111222233334444',
      expDate: '12/28',
      cvv: '123'
    };

    const { getByText, queryByText } = render(
      <Review address={mockAddress} cardDetails={cardDetails} cart={mockCart} />
    );

    // Full card number should not be visible anywhere in the document
    expect(queryByText('4111222233334444')).toBeNull();

    // Masked format showing only last 4 digits should be rendered
    expect(getByText('•••• •••• •••• 4444')).toBeInTheDocument();
  });
});
