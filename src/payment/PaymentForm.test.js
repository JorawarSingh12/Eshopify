import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

test('renders payment form with secure CVV input', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/26',
    cvv: ''
  };
  const handleChange = jest.fn();

  const { container } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={handleChange} />
  );

  const cvvInput = container.querySelector('input[name="cvv"]');
  expect(cvvInput).toBeInTheDocument();
  // Ensure CVV is treated as password to prevent shoulder-surfing
  expect(cvvInput).toHaveAttribute('type', 'password');
  expect(cvvInput).toHaveAttribute('maxLength', '4');
});
