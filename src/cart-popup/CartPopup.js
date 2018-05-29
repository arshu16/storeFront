import React, { Component } from 'react';
import './CartPopup.css';
import { Link } from 'react-router-dom';

class CartPopup extends Component {
    constructor() {
      super();
      this.openPopup = this.openPopup.bind(this);
      this.state = {
        isPopupOpen: false,
        productsInCart: [{
            "title": "Blue Stripe Stoneware Plate",
            "brand": "Kiriko",
            "price": 40,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
            "image": "blue-stripe-stoneware-plate.jpg"
          },
          {
            "title": "Hand Painted Blue Flat Dish",
            "brand": "Kiriko",
            "price": 28,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
            "image": "hand-painted-blue-flat-dish.jpg"
          },
        ]
      }
    }

    openPopup() {
      this.setState(prevState => ({
        isPopupOpen: !prevState.isPopupOpen
      }));
    }

    render() {
      const popup = <div className="App-cart-popup">
        <div className="App-cart-popup__items">
            {
            this.state.productsInCart.map(product => {
              const img = require(`../media/${product.image}`);
              return  <div className="App-cart-popup__item" key={product.title}>
                <div className="App-cart-popup__item__image" style={{backgroundImage: `url(${img})`}}/>
                <div className="App-cart-popup__item--description">
                  <p className="App-cart-popup__item__title">{product.title}</p> 
                  <span className="App-cart-popup__item__quantity"> X {product.quantity}</span>
                  <p className="App-cart-popup__item__brand">{product.brand}</p>
                  <p className="App-cart-popup__item__price">${product.price}</p>
                </div>
                <p className="App-cart-popup__item_remove">X</p>
              </div>
            })
          }
        </div>
        <div className="App-cart-popup__total">
            <span>TOTAL</span>
            <span>${56}</span>
        </div>
        <div className="App-cart-popup__action-buttons">
          <Link to={`/cart`}>
            <button>VIEW DETAILS</button>
          </Link>
          <button>CHECKOUT</button>
        </div>
      </div>;
      return (
        <div className={`App-cart-popup__container ${this.state.isPopupOpen ? 'App-cart-popup__container--open': ''}`} onClick={this.openPopup}>
          <p className="App-cart-popup__title">My Cart (0)</p>
          {
            this.state.isPopupOpen ? popup : null
          }
        </div>
      );
    }
}

export default CartPopup;
