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
                    <span onClick={(e) => increaseClick(e, this.props.product)}>+</span><span className={this.props.counter > this.props.disableAt ? '' : 'disabled-mouse-events'} onClick={(e) => decreaseClick(e, this.props.product)}>-</span>
                </div>
            </div>
        );
    }
}

export default QuantityCounter;
