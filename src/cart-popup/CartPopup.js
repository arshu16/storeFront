import React, { Component } from 'react';
import './CartPopup.css';
import { Link } from 'react-router-dom';
import {
  bindActionCreators
} from 'redux';
import * as Actions from '../actions';
import {
  connect
} from 'react-redux';

class CartPopup extends Component {
    constructor(props) {
      super(props);
      this.openPopup = this.openPopup.bind(this);
      this.state = {
        isPopupOpen: false
      };
    }

    openPopup() {
      this.setState(prevState => ({
        isPopupOpen: !prevState.isPopupOpen
      }));
    }

    //TODO - Move these utilities to an action maybe?
    getValue(cart) {
      return Object.keys(cart).reduce((acc,datum) => {
        acc += cart[datum].price * cart[datum].quantity;
        return acc;
      }, 0) || 0;
    }

    render() {
      const {cart, actions} = this.props;
      const isCartEmpty = !Object.keys(cart).length;
      const popup = <div className="App-cart-popup">
        <div className={`App-cart-popup__items ${isCartEmpty ? 'no-border' : ''}`}>
          {
          !isCartEmpty ?
          <React.Fragment>
             {Object.keys(cart).map(key => {
                const product = cart[key];
                const img = require(`../media/${product.image}`);
                return  <div className="App-cart-popup__item" key={product.title}>
                  <div className="App-cart-popup__item__image" style={{backgroundImage: `url(${img})`}}/>
                  <div className="App-cart-popup__item--description">
                    <p className="App-cart-popup__item__title">{product.title}</p> 
                    <span className="App-cart-popup__item__quantity"> X {product.quantity}</span>
                    <p className="App-cart-popup__item__brand">{product.brand}</p>
                    <p className="App-cart-popup__item__price">${product.price}</p>
                  </div>
                  <p className="App-cart-popup__item_remove" onClick={(e) => {
                    e.stopPropagation();
                    actions.removeFromCart.call(this, product.title);
                    }}>X</p>
                </div>
              }) 
            }
            <div className="App-cart-popup__total">
              <span>TOTAL</span>
              <span>${this.getValue(cart)}</span>
          </div>
          <div className="App-cart-popup__action-buttons">
            <Link to={`/cart`}>
              <button>VIEW DETAILS</button>
            </Link>
            <button>CHECKOUT</button>
          </div>
          </React.Fragment> : <div>No items in cart.</div>
          }
        </div>
      </div>;
      return (
        <React.Fragment>
          {
            this.state.isPopupOpen ? <div className="App-cart-popup__mask" onClick={this.openPopup}></div> : null
          }
          <div className={`App-cart-popup__container ${this.state.isPopupOpen ? 'App-cart-popup__container--open': ''}`}>
            <p className="App-cart-popup__title" onClick={this.openPopup}>My Cart ({Object.keys(this.props.cart).length})</p>
            {
              this.state.isPopupOpen ? popup : null
            }
          </div>
        </React.Fragment>
      );
    }
}

const mapStateToProps = (state) => ({
  ...state
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
