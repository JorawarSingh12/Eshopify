import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security', () => {
  test('CVV field uses password type and enforces max length', () => {
    const cardDetails = { cardName: '', cardNumber: '', expDate: '', cvv: '' };
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).not.toBeNull();
    expect(cvvInput.getAttribute('type')).toBe('password');
    expect(cvvInput.getAttribute('maxLength')).toBe('4');
  });

  test('Review component masks credit card number', () => {
    const cardDetails = { cardName: 'John Doe', cardNumber: '1234567890123456', expDate: '12/25' };
    const address = { firstName: 'John', lastName: 'Doe', address1: '1 Main St', city: 'City', zip: '12345', country: 'US' };
    const cart = [{ product: [] }];
    const { getByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );
    expect(getByText('XXXX-XXXX-XXXX-3456')).toBeInTheDocument();
  });
});
