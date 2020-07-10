import React from 'react';
import spinner from '../../img/spinner.gif';
import styled from 'styled-components';

const StyledSpinner = styled.img`
    width: 150px;
    margin: auto;
    display: block;
`;
const Spinner = () => {
    return <StyledSpinner src={spinner} alt='Loading' />;
};

export default Spinner;
