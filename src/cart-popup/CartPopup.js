import React, { Component } from 'react';
import './CartPopup.css';

class CartPopup extends Component {
    render() {
        return (
          <div className="App-cart-popup__container">
            <p className="App-cart-popup__title">My Cart (0)</p>
          </div>
        );
    }
}

export default CartPopup;
