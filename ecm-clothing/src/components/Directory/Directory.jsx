import React, { useState } from 'react';
import styled from 'styled-components';

import sectionsMock from './DirectoryMockData';
import MenuItem from '../MenuItem/MenuItem';

const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Directory = () => {
    const [sections, setSections] = useState(sectionsMock);

    return (
        <DirectoryContainer>
            {sections.map(({ id, title, imageUrl, size }) => {
                return <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} />
            })}
        </DirectoryContainer>
    );
};

export default Directory;