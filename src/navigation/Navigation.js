import React, { Component } from 'react';
import './Navigation.css';
import logo from '../media/logo.png';
import CartPopup from '../cart-popup/CartPopup';

const navigationList = [{
  text: 'Home',
  }, {
    text: 'Shop',
    submenu: [1, 2, 3, 4]
  }, {
    text: 'Journal',
  }, {
    text: 'More',
    submenu: [1, 2, 3, 4]
  }
];

const listItems = navigationList.map((item, index) => {
  return <li className={item.submenu && item.submenu.length ? 'expandable': ''} key={item.text}>{item.text}</li>
});


class Navigation extends Component {
    render() {
        return (
            <nav className="App-navigation">
                <img className="App-navigation__logo" src={logo} alt="hero-company-logo"/>
                <div className="App-navigation__list-container">
                    <ul className="App-navigation__list">
                    {
                        listItems
                    }
                    </ul>
                </div>
                <CartPopup/>
            </nav>
        );
    }
}

export default Navigation;
