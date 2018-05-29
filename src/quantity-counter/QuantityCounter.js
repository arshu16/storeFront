import React, { Component } from 'react';
import './QuantityCounter.css';

class QuantityCounter extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div className="App-product__quantity">
                <span>{counter || 0}</span>
                <div className="App-product__quantity__action-buttons">
                    <span>+</span><span>-</span>
                </div>
            </div>
        );
    }
}

export default QuantityCounter;
