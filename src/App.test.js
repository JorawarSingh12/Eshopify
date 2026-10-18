import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })));

const rrfProps = {
  firebase,
  config: { userProfile: 'users', useFirestoreForProfile: true },
  dispatch: store.dispatch
};

test('renders app component without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
