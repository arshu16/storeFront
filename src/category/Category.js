import React, { Component } from 'react';
import './Category.css';
import ProductCard from '../product-card/ProductCard';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('/products.json');
        const json = await response.json();
        let products = json.map(product => {
            return  (
                <ProductCard key={product.title} product={product}/>
            );
        });
        this.setState({
            products: products
        });
    }
    render() {
        return (
            <div className="Category">
                {this.state.products}
            </div>
        );
    }
}

export default Category;
