import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './GlobalStyles';
import styled from 'styled-components';
import Header from './components/UI/Header';
import Search from './components/UI/Search';
import CharacterGrid from './components/characters/CharacterGrid';
const Wrapper = styled.div`
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
`;

const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}
`);
            setItems(result.data);
            setIsLoading(false);
        };
        fetchItems();
    }, [query]);

    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />
        </Wrapper>
    );
};

export default App;
