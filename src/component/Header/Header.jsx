import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <>
        <nav className='header'>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Invertory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
        </>
    );
};

export default Header;