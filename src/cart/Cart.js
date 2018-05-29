import React, { Component } from 'react';
import './Cart.css';
import {
    Link
} from 'react-router-dom';
import QuantityCounter from '../quantity-counter/QuantityCounter';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
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
                                    this.state.productsInCart.map(product => {
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
                                                    <span className="App-cart__details-list__item__quantity"> <QuantityCounter counter={product.quantity}/></span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <p className="App-cart__details-list__item__price">${product.price}</p>
                                                </div>
                                            </td>
                                            <td><div><span className="App-cart__details-list__item__remove">
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
                                    <span className="float-right">$56</span>
                                </p>
                                <p>
                                    <span>TOTAL</span>
                                    <span className="black-color float-right">$56 CAD</span>
                                </p>
                            </div>
                        </div>
                        <div className="App-cart__footer">
                            <Link to="/">
                                Continue Shopping
                            </Link>
                            <button>CHECKOUT ($56.00)</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;
