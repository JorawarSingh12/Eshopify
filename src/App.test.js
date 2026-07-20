import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import PaymentForm from './payment/PaymentForm';
import Review from './payment/Review';

const mockStore = createStore((state = {
  firebase: {
    auth: {
      isEmpty: true,
      uid: null,
    }
  },
  firestore: {
    ordered: {
      cart: []
    }
  },
  user: {
    isProfileError: false,
    isWishlistError: false,
    isProductError: false,
  }
}) => state);

test('renders eshopify link', () => {
  const { getAllByText } = render(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  const linkElements = getAllByText(/Eshopify/i);
  expect(linkElements.length).toBeGreaterThan(0);
});

test('PaymentForm CVV is rendered as password type', () => {
  const cardDetails = {
    cardName: "John Doe",
    cardNumber: "1234567812345678",
    expDate: "12/25",
    cvv: "123"
  };
  const { getByLabelText } = render(
    <PaymentForm cardDetails={cardDetails} changecardDetails={() => {}} />
  );
  const cvvInput = getByLabelText(/CVV/i);
  expect(cvvInput).toHaveAttribute('type', 'password');
});

test('Review masks the credit card number', () => {
  const cardDetails = {
    cardName: "John Doe",
    cardNumber: "1234567812345678",
    expDate: "12/25"
  };
  const address = {
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main St",
    city: "San Jose",
    zip: "95112",
    country: "USA"
  };
  const cart = [{
    product: [
      { id: "1", title: "Laptop", Brand: "BrandX", price: "999.99" }
    ]
  }];
  const { getByText, queryByText } = render(
    <Review cardDetails={cardDetails} address={address} cart={cart} />
  );
  expect(getByText(/\*{12}5678/)).toBeInTheDocument();
  expect(queryByText("1234567812345678")).not.toBeInTheDocument();
});
