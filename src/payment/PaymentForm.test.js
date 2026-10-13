import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders payment form with password type for CVV and proper attributes', () => {
  const mockCardDetails = {
    cardName: 'John Doe',
    cardNumber: '1234567812345678',
    expDate: '12/25',
    cvv: '123'
  };
  const mockChangeHandler = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={mockCardDetails} changecardDetails={mockChangeHandler} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('id', 'cvv');
  expect(cvvInput).toHaveAttribute('maxlength', '4');
});
