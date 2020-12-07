import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';
import Home from './container/Home/Home';
import Shop from './container/Shop/Shop';
import Login from './container/Account/Login';
import ShopDetail from './container/ShopDetail/ShopDetail';
import Cart from './container/Cart/Cart';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import allReducers from './redux/reducers/index';

import 'antd/dist/antd.css';
import "./css/style.css";
import "./css/elegant-icons.css";
import "./css/new.css";
import "./sass/_header.scss";
import "./sass/_responsive.scss";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/login.css";
import "./css/nice-select.css"
import Checkout from './container/Checkout/Checkout';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(allReducers,composeEnhancers());

window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/search/:name" component={Shop} />
      <Route path="/shop/:id" component={Shop} />
      <Route path="/login" component={Login} />
      <Route path="/shop-detail/:id" component={ShopDetail} />
      <Route path="/cart" component = {Cart}/>
      <Route path="/check-out" component = {Checkout}/>
      <Footer></Footer>
    </Router>
  </Provider>,
  document.getElementById('root')
);