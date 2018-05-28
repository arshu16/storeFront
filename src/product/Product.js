import React, { Component } from 'react';
import './Product.css';

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

    async componentDidMount() {
        const response = await fetch('/products.json');
        const json = await response.json();
        let products = json.filter(x => x.title === this.state.id);
        let {id} = this.state;
        this.setState({
            id,
            product: products.length ? products[0]: undefined
        });
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
                    <span>HOME</span> / 
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
                                <div className="App-product__quantity">
                                    <span>{this.state.counter || 0}</span>
                                    <div className="App-product__quantity__action-buttons">
                                        <span>+</span><span>-</span>
                                    </div>
                                </div>
                                <button className="App-product__add-to-cart-button">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}

export default Product;
