import React from 'react';
import logo from '../../img/logo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt='Logo' />
        </StyledHeader>
    );
};

export default Header;
