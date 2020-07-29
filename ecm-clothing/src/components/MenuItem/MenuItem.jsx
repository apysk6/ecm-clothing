import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackgroundWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url("${props => props.imageUrl}");
    background-position: center;
    background-size: cover;
`;

const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

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

const MenuItemContainer = styled.div`
    min-width: 30%;
    height: ${props => props.size === 'large' ? '380px' : '240px'};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;

    &:hover {
        cursor: pointer;

        & ${BackgroundWrapper} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${Content} {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
      }
    
    &:last-child {
        margin-left: 7.5px;
    }
`;

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <MenuItemContainer size={size}>
            <BackgroundWrapper imageUrl={imageUrl} />
                <Content>
                    <h1>{title.toUpperCase()}</h1>
                    <span>SHOP NOW</span>
                </Content>
        </MenuItemContainer>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    size: PropTypes.string
};

export default MenuItem;