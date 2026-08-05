import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaymentForm from './PaymentForm';
import Review from './Review';

describe('Security Test Suite: Payment Security and Compliance', () => {
  test('CVV field is a password field and has input restrictions', () => {
    const cardDetails = {
      cardName: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    };
    const changecardDetails = jest.fn();

    const { getByLabelText } = render(
      <PaymentForm cardDetails={cardDetails} changecardDetails={changecardDetails} />
    );

    const cvvInput = getByLabelText(/CVV/i);

    // 1. Verify CVV is of type password
    expect(cvvInput.type).toBe('password');

    // 2. Verify CVV changeHandler input restrictions
    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '12345' } });
    expect(changecardDetails).toHaveBeenCalledWith({
      ...cardDetails,
      cvv: '1234' // should slice to 4 characters
    });

    fireEvent.change(cvvInput, { target: { name: 'cvv', value: '12abc' } });
    expect(changecardDetails).toHaveBeenCalledWith({
      ...cardDetails,
      cvv: '12' // should strip letters and only allow digits
    });
  });

  test('Credit card number is masked on the display component', () => {
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
      city: 'Seattle',
      zip: '98101',
      country: 'USA'
    };
    const cart = [{
      product: [
        { id: '1', title: 'Product 1', Brand: 'Brand 1', price: '100' }
      ]
    }];

    const { getByText, queryByText } = render(
      <Review cardDetails={cardDetails} address={address} cart={cart} />
    );

    // Verify that the full card number is NOT rendered in full
    expect(queryByText('1234567812345678')).not.toBeInTheDocument();

    // Verify that the masked card number (ending in last 4 digits) is rendered
    expect(getByText(/xxxx-xxxx-xxxx-5678/i)).toBeInTheDocument();
  });
});
