import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import rootReducer from './reducers/rootReducer';
import firebase from './config/fbConfig';

test('renders App correctly inside Redux and Firebase Provider', () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  );

  const rrfProps = {
    firebase,
    config: { userProfile: 'users', useFirestoreForProfile: true },
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  const { container } = render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );

  expect(container).toBeInTheDocument();
});
