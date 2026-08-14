import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review, { maskCardNumber } from './Review';

describe('Security Compliance (PCI-DSS & PII Masking)', () => {
  test('CVV field must use type="password" and restrict format to max 4 digits', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const changecardDetails = jest.fn();

    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    // Find the CVV input
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');

    // Test digit filtering in changeHandler
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '12abc3' } });
    expect(changecardDetails).toHaveBeenCalledWith(
      expect.objectContaining({ cvv: '123' })
    );
  });

  test('maskCardNumber utility masks card numbers properly, keeping only last 4 digits', () => {
    expect(maskCardNumber('1234567812345678')).toBe('************5678');
    expect(maskCardNumber('1234-5678-1234-5678')).toBe('************5678');
    expect(maskCardNumber('4321')).toBe('4321');
    expect(maskCardNumber('')).toBe('');
  });

  test('Review component masks the full credit card number in display details', () => {
    const address = {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      city: 'Boston',
      zip: '02108',
      country: 'USA'
    };
    const cardDetails = {
      cardName: 'John Doe',
      cardNumber: '1234567812345678',
      expDate: '12/29',
      cvv: '123'
    };
    const cart = [
      {
        product: [
          { id: '1', title: 'Laptop', Brand: 'Dell', price: '999.99' }
        ]
      }
    ];

    render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // The component should display the masked card number and not the plain card number
    expect(screen.queryByText('1234567812345678')).not.toBeInTheDocument();
    expect(screen.getByText('************5678')).toBeInTheDocument();
  });
});
