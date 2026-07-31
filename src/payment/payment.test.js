import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Form Security Tests', () => {
  test('CVV field is a password field and has correct attributes', () => {
    const mockCardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const mockChangeCardDetails = jest.fn();

    const { container } = render(
      <PaymentForm
        cardDetails={mockCardDetails}
        changecardDetails={mockChangeCardDetails}
      />
    );

    // Find the CVV input
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();

    // Assert type is password
    expect(cvvInput.getAttribute('type')).toBe('password');

    // Assert input formatting/restrictions are applied
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });
});

describe('Payment Review Masking Security Tests', () => {
  test('Credit card number is masked and full number is not leaked', () => {
    const mockCardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const mockAddress = {
      firstName: 'Jane',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Boston',
      zip: '02111',
      country: 'USA'
    };
    const mockCart = [
      {
        product: [
          {
            id: 'prod1',
            title: 'Sample Product',
            Brand: 'Sample Brand',
            price: '19.99'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review
        cardDetails={mockCardDetails}
        address={mockAddress}
        cart={mockCart}
      />
    );

    // Verify the unmasked full credit card number is NOT rendered in the document
    expect(queryByText('1234567812345678')).toBeNull();

    // Verify that the masked version is rendered (shows only the last 4 digits)
    expect(getByText(/XXXX-XXXX-XXXX-5678/i)).toBeInTheDocument();
  });
});
