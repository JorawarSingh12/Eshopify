import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Security Test Suite - Payment Masks & CVV configuration', () => {
  const mockCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/28',
    cvv: '123',
  };

  const mockAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address1: '123 Main St',
    city: 'New York',
    zip: '10001',
    country: 'USA',
  };

  const mockCart = [
    {
      product: [
        {
          id: 'prod1',
          title: 'Mock Product',
          Brand: 'SecureBrand',
          price: '100.00',
        },
      ],
    },
  ];

  test('PaymentForm renders CVV field with password type and proper format restrictions', () => {
    const changecardDetailsMock = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={changecardDetailsMock} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Review screen masks credit card number and prevents PII leak', () => {
    const { queryByText, getByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    // Assert that the full plaintext card number is NOT present in the DOM
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();

    // Assert that the masked version is present in the DOM
    expect(getByText(/XXXX-XXXX-XXXX-5678/)).toBeInTheDocument();
  });
});
