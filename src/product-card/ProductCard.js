import React, { Component } from 'react';
import './ProductCard.css';
import {
    Link
} from 'react-router-dom';

class ProductCard extends Component {
    render() {
        const { product } = this.props;
        const img = require(`../media/${product.image}`);
        const style  = {
            backgroundImage: `url(${img})`
        }
        const {onClick} = this.props;
        return (
            <div className="App-product__card">
                <div className="App-product__card__image" style={style} alt={`${product.title}`}>
                    <Link to={`/product/${product.title}`}>
                        <button className="App-product__card__button">VIEW DETAILS</button>
                    </Link>
                    <button className="App-product__card__button muted" onClick={(e) => {onClick(e, product)}}>ADD TO CART</button>
                    <div className="mask"></div>
                </div>
                <p className="App-product__card__brand">{product.brand}</p>
                <p className="App-product__card__title">{product.title}</p>
                <p className="App-product__card__price">${product.price}</p>
            </div>
        );
    }
}

export default ProductCard;
