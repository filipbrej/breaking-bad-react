import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    cursor: pointer;
    background-color: transparent;
    height: 300px;
    perspective: 1000px;

    h1 {
        font-size: 25px;
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    li {
        list-style: none;
        padding-bottom: 10px;
    }
`;

const InnerCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    :hover {
        transform: rotateY(180deg);
    }
`;

const CardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    --webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

const CardBack = styled(CardFront)`
    color: white;
    background-color: #333;
    padding: 20px;
    transform: rotateY(180deg);
`;

const CharacterItem = ({ item }) => {
    return (
        <Card>
            <InnerCard>
                <CardFront>
                    <img src={item.img} alt='' />
                </CardFront>
                <CardBack>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </CardBack>
            </InnerCard>
        </Card>
    );
};

export default CharacterItem;
