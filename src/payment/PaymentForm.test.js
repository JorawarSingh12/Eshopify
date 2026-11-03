import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security', () => {
  const mockCardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/28',
    cvv: '123'
  };
  const mockChangeCardDetails = jest.fn();

  test('CVV field is configured with type="password" to protect sensitive auth data', () => {
    const { container } = render(
      <PaymentForm
        cardDetails={mockCardDetails}
        changecardDetails={mockChangeCardDetails}
      />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('maxLength', '4');
  });

  test('Card number input restricts length to 19 characters', () => {
    const { container } = render(
      <PaymentForm
        cardDetails={mockCardDetails}
        changecardDetails={mockChangeCardDetails}
      />
    );

    const cardNumberInput = container.querySelector('input[name="cardNumber"]');
    expect(cardNumberInput).toBeInTheDocument();
    expect(cardNumberInput).toHaveAttribute('maxLength', '19');
  });
});
