import React, { Component } from 'react';
import './Product.css';
import QuantityCounter from '../quantity-counter/QuantityCounter';
import {
    bindActionCreators
} from 'redux';
import * as Actions from '../actions';
import {
    connect
} from 'react-redux';
import {Link} from 'react-router-dom';

/*
This component tries to search for a product from the ID providecd in the URL
if:
found - It will show the details
not found - It will display a message stating, no product exists
PS: here ID is the title of the product
*/
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            product: null,
        };
    }

    /* 
    ** These products should be pushed into the state, Putting this as a TO_DO
    ** TO_DO - Push these into the store, we don't need to fetch them again.
    */
    async componentDidMount() {
        const response = await fetch('/products.json');
        const json = await response.json();
        let products = json.filter(x => x.title === this.state.id);
        let {id} = this.state;
        //Do nothing if it is not a valid product
        if(!products.length) {
            return;
        }
        if (this.props.cart && this.props.cart[products[0].title]) { //Check if this product is avaiable in the cart or not
            products[0] = {
                ...this.props.cart[products[0].title]
            }
        } else {
            products[0].quantity = 0; //Initial quantity
        }
        this.setState({
            id,
            product: products.length ? products[0]: undefined
        });
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    /* The logic of this function works like the following
    ** 1. IF(local quantity and store quantity is same while adding) => Add 1 to the store
    ** 2. IF(local quantity - store quantity > 1) => copy that quantity
    ** 3. IF(store quantity === 0) => add 1 quantity of that product
    ** 4. IF(no product in cart and quantity to be added is >1) => then add that quantity
    */
    addToCart(e) {
        let productToCopy;
        if (this.props.cart[this.state.product.title]
            && (Math.abs(this.props.cart[this.state.product.title].quantity - this.state.product.quantity) > 1
                || this.state.product.quantity < this.props.cart[this.state.product.title].quantity)) {
                productToCopy = {
                    ...this.state.product,
                    quantity: this.state.product.quantity
                }
        } else if (!this.props.cart[this.state.product.title] && this.state.product.quantity > 1 ){
            productToCopy = {
                ...this.state.product,
                quantity: this.state.product.quantity
            }
        } else {
            productToCopy = {
                ...this.state.product,
                quantity: this.state.product.quantity + 1
            }
            this.increaseQuantity(e);
        }
        this.props.actions.addToCart(productToCopy);
    }

    increaseQuantity(e) {
        e.stopPropagation();
        try {
            this.setState({
                ...this.state,
                product: {
                    ...(this.state.product),
                    quantity: this.state.product.quantity + 1
                }
            });
        } catch(err) {
            console.error('Could increase quantity');
        }
    }

    decreaseQuantity(e) {
        try {
            this.setState({
                ...this.state,
                product: {
                    ...(this.state.product),
                    quantity: this.state.product.quantity - 1
                }
            });
        } catch (err) {
            console.error('Could increase quantity');
        }
    }

    render() {
        let img, style;
        if (this.state.product) {
            img = require(`../media/${this.state.product.image}`);
            style = {
                backgroundImage: `url(${img})`
            }
        }

        let breadcrumbs = <div className="App-breadcrumbs">
                    <span><Link to={'/'}>HOME</Link></span> / 
                    <span>PLATES</span> / 
                    <span>{this.state.id}</span>
                </div>;
        return (
            !this.state.product ? 
                <div>Not A Valid Product</div>
                :
                <React.Fragment>
                    {breadcrumbs}
                    <div className="App-product">
                        <div className="App-product__image" style={style} alt={`${this.state.product.title}`}></div>
                        <div className="App-product__description">
                            <div style={{'borderBottom': '1px solid rgba(0,0,0,0.1)', 'paddingBottom': '15px'}}>
                                <p className="App-product__card__brand">{this.state.product.brand}</p>
                                <p className="App-product__card__title">{this.state.product.title}</p>
                                <p className="App-product__card__price">${this.state.product.price}</p>
                                <p className="App-product__card__description-text">{this.state.product.description}</p>
                            </div>
                            <div className="App-product__add-to-cart">
                                <QuantityCounter disableAt={0} counter = {
                                    this.state.product.quantity || 0
                                }
                                increaseClick = {
                                    this.increaseQuantity.bind(this)
                                }
                                decreaseClick = {
                                    this.decreaseQuantity.bind(this)
                                }
                                />
                                <button onClick={this.addToCart.bind(this)} className="App-product__add-to-cart-button">ADD TO CART</button>
                            </div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
