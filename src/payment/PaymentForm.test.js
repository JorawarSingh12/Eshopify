import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm Security Component Tests', () => {
  const cardDetails = {
    cardName: 'John Doe',
    cardNumber: '4111111111111111',
    expDate: '12/25',
    cvv: '123'
  };

  it('renders CVV field securely with password type and required attribute', () => {
    const mockChangeHandler = jest.fn();
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={mockChangeHandler} />
    );

    const cvvInput = getByLabelText(/cvv/i);
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toBeRequired();
    expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
    expect(cvvInput).toHaveValue('123');
  });

  it('calls changecardDetails handler on change', () => {
    const mockChangeHandler = jest.fn();
    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={mockChangeHandler} />
    );

    const cvvInput = getByLabelText(/cvv/i);
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '456' } });
    expect(mockChangeHandler).toHaveBeenCalledWith({
      ...cardDetails,
      cvv: '456'
    });
  });
});
