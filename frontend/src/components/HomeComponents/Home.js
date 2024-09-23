import React from 'react';
import Contents from './Contents.js';
import Data from '../../Data.js';

const Home = () => {
    
    const contentData = Data
    return (
        <div>
            {contentData.map((item, index) => (
                <Contents key={index} title={item.type} data={item.data} />
            ))}
        </div>
    );
};

export default Home;
