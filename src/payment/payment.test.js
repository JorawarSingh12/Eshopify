import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Security Tests - Payment Masking and CVV password configuration', () => {
  test('CVV field is a password input and limited to maxLength 4', () => {
    const mockChangeCardDetails = jest.fn();
    const mockCardDetails = { cvv: '' };

    render(
      <PaymentForm
        cardDetails={mockCardDetails}
        changecardDetails={mockChangeCardDetails}
      />
    );

    const cvvInput = screen.getByLabelText(/CVV/i);
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Credit card number displayed in Review is masked properly showing only the last 4 digits', () => {
    const mockCardDetails = {
      cardNumber: '1234567890123456',
      cardName: 'John Doe',
      expDate: '12/25'
    };
    const mockAddress = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 St',
      city: 'City',
      zip: '12345',
      country: 'USA'
    };
    const mockCart = [
      {
        product: [
          { id: '1', title: 'Product 1', Brand: 'Brand 1', price: '100' }
        ]
      }
    ];

    render(
      <Review
        cardDetails={mockCardDetails}
        address={mockAddress}
        cart={mockCart}
      />
    );

    // The full unmasked card number should NOT be in the document
    expect(screen.queryByText('1234567890123456')).not.toBeInTheDocument();

    // The masked card number should be in the document
    const maskedText = screen.getByText('XXXX-XXXX-XXXX-3456');
    expect(maskedText).toBeInTheDocument();
  });
});
