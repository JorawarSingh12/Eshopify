import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Payment Components Security', () => {
  const mockCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };

  test('CVV field in PaymentForm has type="password"', () => {
    const { getByLabelText } = render(
      <PaymentForm cardDetails={mockCardDetails} changecardDetails={() => {}} />
    );
    const cvvInput = getByLabelText(/CVV/i);
    expect(cvvInput).toHaveAttribute('type', 'password');
  });

  test('Review component masks credit card number showing only last 4 digits', () => {
    const mockAddress = { address1: '123 St', city: 'City', zip: '12345', country: 'Country' };
    const mockCart = [{ product: [{ id: 1, title: 'Item 1', price: '10' }] }];

    const { getByText, queryByText } = render(
      <Review cardDetails={mockCardDetails} address={mockAddress} cart={mockCart} />
    );

    // Should display masked card number with last 4 digits
    expect(getByText(/XXXX-XXXX-XXXX-5678/i)).toBeInTheDocument();
    // Should NOT expose full card number
    expect(queryByText('1234567812345678')).toBeNull();
  });
});
