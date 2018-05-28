import React, { Component } from 'react';
import './ProductCard.css';


class ProductCard extends Component {

    render() {
        const { product } = this.props;
        const img = require(`../media/${product.image}`);
        const style  = {
            backgroundImage: `url(${img})`
        }
        
        return (
            <div className="App-product__card">
                <div className="App-product__card__image" style={style} alt={`${product.title}`}>
                    <button>VIEW DETAILS</button>
                    <button>ADD TO CART</button>
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
