import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import rootReducer from './reducers/rootReducer';
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase,
  config: { userProfile: 'users' },
  dispatch: store.dispatch
};

test('renders app component', () => {
  const { container } = render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
