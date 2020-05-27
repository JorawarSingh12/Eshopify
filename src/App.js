import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Authentication from './components/Authentication';
import Home from './components/Home'
import Details from './components/Details'
import Checkout from './payment/Checkout'
import Header from './partials/Header'
import Footer from './partials/Footer'
import purple from '@material-ui/core/colors/purple';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import  Wishlist  from './components/Usercomponent/Wishlist';
import  Category  from './components/Category';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/eshopify" component={Home}></Route>
        <Route path="/signin" component={Authentication}></Route>
        <Route path="/payment" component={Checkout}></Route>
        <Route path="/products/:productid" component={Details}></Route>
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/category/:category" component={Category}></Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
