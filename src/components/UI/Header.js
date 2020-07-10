import React from 'react';
import logo from '../../img/logo.png';
import axios from 'axios';

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt='Logo' />
        </header>
    );
};

export default Header;
