import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import{ ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import {createFirestoreInstance,reduxFirestore, getFirestore} from 'redux-firestore'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import CircularProgress from '@material-ui/core/CircularProgress'
import {createStore,applyMiddleware ,compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({  getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig)
   
    )
  );


const profileSpecificProps = {

  userProfile: 'users',
  useFirestoreForProfile: true,
  resetBeforeLogin: false

}



const rrfProps = {

  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance

};



function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)

  if (!isLoaded(auth)) return <div style={{marginLeft:"50%",paddingTop:"350px"}}>
  <CircularProgress color="secondary" ></CircularProgress>
</div>;

      return children

}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
    </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
