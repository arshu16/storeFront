import React, { Component } from 'react';
import './Cart.css';
import {
    Link
} from 'react-router-dom';
import QuantityCounter from '../quantity-counter/QuantityCounter';
import {
    bindActionCreators
} from 'redux';
import * as Actions from '../actions';
import {
    connect
} from 'react-redux';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

     getValue(cart) {
         return Object.keys(cart).reduce((acc, datum) => {
             acc += cart[datum].price * cart[datum].quantity;
             return acc;
         }, 0) || 0;
     }

     increaseQuantity(e, product) {
        e.stopPropagation();
        this.props.actions.increaseProductQuantity(product.title);
    }

    decreaseQuantity(e, product) {
        e.stopPropagation();
        this.props.actions.decreaseProductQuantity(product.title);
    }

    render() {
        return (
            <div className="App-cart">
                <h1>Shopping Cart</h1>
                <div className="App-cart__details">
                    <div className="App-cart__details-list">
                        <table className="App-cart__details-list__table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(this.props.cart).map(key => {
                                        const product = this.props.cart[key];
                                        const img = require(`../media/${product.image}`);
                                        return <tr key={product.title} >
                                            <td>
                                                <div>
                                                    <div className="App-cart__details-list__item__image" style={{backgroundImage: `url(${img})`}}/>
                                                    <div className="App-cart__details-list__item--description">
                                                        <p className="App-cart__details-list__item__text light">{product.brand}</p>
                                                        <p className="App-cart__details-list__item__text">{product.title}</p> 
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="App-cart__details-list__item__quantity"> 
                                                        <QuantityCounter disableAt={1} product={product} counter={product.quantity} increaseClick = {
                                                            this.increaseQuantity.bind(this)
                                                        }
                                                        decreaseClick = {
                                                            this.decreaseQuantity.bind(this)
                                                        }/>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className="App-cart__details-list__item__price">${product.price * product.quantity}</p>
                                                </div>
                                            </td>
                                            <td><div><span className="App-cart__details-list__item__remove" onClick={(e) => {
                                                e.stopPropagation();
                                               this.props.actions.removeFromCart.call(this, product.title);
                                            }}>
                                                X
                                            </span></div></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="App-cart__overview">
                            <div>
                                <p>CART OVERVIEW</p>
                                <p>
                                    <span>SUBTOTAL</span>
                                    <span className="float-right">${this.getValue(this.props.cart)}</span>
                                </p>
                                <p>
                                    <span>TOTAL</span>
                                    <span className="black-color float-right">${this.getValue(this.props.cart)} CAD</span>
                                </p>
                            </div>
                        </div>
                        <div className="App-cart__footer">
                            <Link to="/">
                                Continue Shopping
                            </Link>
                            <button>CHECKOUT (${this.getValue(this.props.cart)})</button>
                        </div>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
