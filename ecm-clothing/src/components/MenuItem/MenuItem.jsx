import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;

    &:first-child {
        margin-right: 7.5px;
      }
    
    &:last-child {
        margin-left: 7.5px;
    }
`;

const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    h1 {
        font-weight: bold;
        margin-bottom: 6px;
        font-size: 22px;
        color: #4a4a4a;
    }

    span {
        font-weight: lighter;
        font-size: 16px;
    }
`;

const MenuItem = ({ title }) => {
    return (
        <MenuItemContainer>
            <Content>
                <h1>{title}</h1>
                <span>SHOPNOW</span>
            </Content>
        </MenuItemContainer>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string
};

export default MenuItem;