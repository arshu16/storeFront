import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import platesHeader from './media/plates-header.jpg';
import Category from "./category/Category";
import Cart from "./cart/Cart";
import Product from "./product/Product";
import Navigation from './navigation/Navigation';

class App extends Component {
  render() {
    const header = window.location.pathname === '/' ? <header className="App-header">
          <div className="App-header__subheading">
            <h1 className="App-header__subheading__title">Plates</h1>
            <h1 className = "App-header__subheading__description" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at purus pulvinar, placerat turpis ac, interdum metus.In eget massa sed enim hendrerit auctor a eget arcu.Curabitur ac pharetra nisl, sit amet mattis dolor. </h1>
          </div>
        </header> : null;
    const customContainerStyle = {
      'paddingBottom': 0,
      height: 'calc(100vh - 91px)',
      background:  '#F5F5F5'
    };
    return (
      <div className="App">
        <Navigation/>
        {header }
        {/* <header>
            <Link to="/cart">My Cart</Link>
        </header> */}
        <div className="App-container" style={window.location.pathname === '/cart' ? customContainerStyle : null }>
          <Route exact path="/" component={Category} isHeader="true"/>
          <Route path="/cart" component={Cart}/>
          <Route path="/product/:id" component={Product}/>
        </div>
      </div>
    );
  }
}

export default App;
