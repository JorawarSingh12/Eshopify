import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
    resetBeforeLogin: false,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

test('renders Eshopify component hierarchy correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
