import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Security Test Suite for Payments', () => {
  test('CVV field is a password type and has correct length restrictions', () => {
    const mockCardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const mockChangeCardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeCardDetails} />
    );

    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Credit card number is masked on the Review component and does not display in plaintext', () => {
    const mockCardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/26',
      cvv: '123'
    };
    const mockAddress = {
      firstName: 'John',
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
            id: '1',
            title: 'Sample Product',
            Brand: 'Sample Brand',
            price: '99.99'
          }
        ]
      }
    ];

    const { queryByText, getByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    // Full card number should NOT be in the document
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();

    // The masked card number should be present
    expect(getByText('XXXX-XXXX-XXXX-5678')).toBeInTheDocument();
  });
});
