import React, { Component } from 'react';
import './QuantityCounter.css';

class QuantityCounter extends Component {
    render() {
        const {
            counter,
            increaseClick, 
            decreaseClick
        } = this.props;
        return (
            <div className="App-product__quantity">
                <span>{this.props.counter}</span>
                <div className="App-product__quantity__action-buttons">
                    <span onClick={increaseClick}>+</span><span className={this.props.counter > 0 ? '' : 'disabled-mouse-events'} onClick={decreaseClick}>-</span>
                </div>
            </div>
        );
    }
}

export default QuantityCounter;
