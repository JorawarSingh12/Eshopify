import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Authentication from './components/Authentication';
import Home from './components/Home'
import Details from './components/Details'
import Checkout from './payment/Checkout'
import Header from './partials/Header'
import Footer from './partials/Footer'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import  Wishlist  from './components/Usercomponent/Wishlist';
import  Orders  from './components/Usercomponent/Orders';
import  Category  from './components/Category';
import Cart from './components/Usercomponent/Cart';
import Error from './components/Error'
import  Create  from './components/Create';

const theme = createMuiTheme({
  palette: {
    primary: {
     main: "#ec407a",
    },
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
        <Route path="/cart" component={Cart}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/category/:category" component={Category}></Route>
        <Route path="/becomeSeller" component={Create}></Route>
        <Route path="/:anypage" component={Error}></Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
