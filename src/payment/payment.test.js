import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('PaymentForm Security Tests', () => {
  test('CVV field is a password type, required, and has correct input restrictions', () => {
    const cardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    // Find CVV input by name or selector
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput).toBeRequired();
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('CVV field filters out non-numeric characters and limits length to 4 digits', () => {
    let currentCardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const changecardDetails = jest.fn((newDetails) => {
      currentCardDetails = newDetails;
    });

    const { container, rerender } = render(
      <PaymentForm cardDetails={currentCardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');

    // Simulate typing non-numeric character
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '12a3' } });
    expect(changecardDetails).toHaveBeenCalled();
    expect(currentCardDetails.cvv).toBe('123');

    // Re-render with updated state to simulate controlled component update
    rerender(
      <PaymentForm cardDetails={currentCardDetails} changecardDetails={changecardDetails} />
    );

    // Simulate typing more than 4 characters
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '12345' } });
    expect(currentCardDetails.cvv).toBe('1234');
  });
});

describe('Review Payment Masking Security Tests', () => {
  test('Credit card number is masked on the review screen showing only the last 4 digits', () => {
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/25',
      cvv: '123'
    };
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Boston',
      zip: '02108',
      country: 'USA'
    };
    const cart = [
      {
        product: [
          {
            id: '1',
            title: 'Laptop',
            Brand: 'BrandX',
            price: '999.99'
          }
        ]
      }
    ];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Full card number should NOT be in the document
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();

    // Masked card number should be present in the document
    expect(getByText(/XXXX-XXXX-XXXX-5678/)).toBeInTheDocument();
  });
});
