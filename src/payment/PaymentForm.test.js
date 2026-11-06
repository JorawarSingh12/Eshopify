import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm security', () => {
  const cardDetails = {
    cardName: 'Jane Doe',
    cardNumber: '4111111111111234',
    expDate: '12/28',
    cvv: '123'
  };

  test('CVV field is protected with password type and cc-csc autocomplete', () => {
    const changecardDetails = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    expect(cvvInput).toBeInTheDocument();
    expect(cvvInput).toHaveAttribute('type', 'password');
    expect(cvvInput).toHaveAttribute('autocomplete', 'cc-csc');
    expect(cvvInput).toHaveAttribute('maxlength', '4');
  });

  test('CVV input change invokes changecardDetails properly', () => {
    const changecardDetails = jest.fn();
    const { container } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = container.querySelector('input[name="cvv"]');
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '999' } });
    expect(changecardDetails).toHaveBeenCalledWith({
      ...cardDetails,
      cvv: '999'
    });
  });
});
