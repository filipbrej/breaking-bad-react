import React, { useState } from 'react';
import styled from 'styled-components';

// Search bar styling
const Wrapper = styled.section`
    height: 100px;
`;

const SearchBar = styled.input`
    display: block;
    padding: 10px;
    font-size: 20px;
    border: 0;
    border-radius: 5px;
    width: 60%;
    margin: auto;
`;

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };
    return (
        <Wrapper>
            <form>
                <SearchBar
                    type='text'
                    className='form-control'
                    placeholder='Search characters'
                    autoFocus
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </Wrapper>
    );
};

export default Search;
