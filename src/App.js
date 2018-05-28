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
    return (
      <div className="App">
        <Navigation/>
        <header className="App-header">
          <div className="App-header__subheading">
            <h1 className="App-header__subheading__title">Plates</h1>
            <h1 className = "App-header__subheading__description" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam at purus pulvinar, placerat turpis ac, interdum metus.In eget massa sed enim hendrerit auctor a eget arcu.Curabitur ac pharetra nisl, sit amet mattis dolor. </h1>
          </div>
        </header>

        {/* <header>
            <Link to="/cart">My Cart</Link>
        </header> */}

        <Route exact path="/" component={Category} />
        <Route path="/cart" component={Cart}/>
        <Route path="/product/:id" component={Product}/>
      </div>
    );
  }
}

export default App;
