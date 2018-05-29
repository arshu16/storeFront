import React, { Component } from 'react';
import './Category.css';
import ProductCard from '../product-card/ProductCard';
import {
    addToCart
} from '../actions';
import {
    connect
} from 'react-redux';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(e, product) {
        e.stopPropagation();
        this.props.addToCartDispatch(e, product);
    }

    async componentDidMount() {
        const response = await fetch('/products.json');
        const json = await response.json();
        let products = json.map(product => {
            return  (
                <ProductCard onClick={this.addToCart} key={product.title} product={product}/> //This is a presentational component, it should not know the state
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

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        addToCartDispatch: (e, product) => {
            dispatch(addToCart(product))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Category)

