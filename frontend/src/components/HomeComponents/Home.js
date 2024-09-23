import React from 'react';
import Contents from './Contents.js';
import Data from '../../Data.js';

const Home = () => {
    const contentData = Data;

    return (
        <div>
            <div id="questionPapers">
                {contentData.filter(item => item.type === "Past Year Papers").map((item, index) => (
                    <Contents key={index} title={item.type} data={item.data} />
                ))}
            </div>
            <div id="notes">
                {contentData.filter(item => item.type === "Notes").map((item, index) => (
                    <Contents key={index} title={item.type} data={item.data} />
                ))}
            </div>
            <div id="feedback">
                {/* Feedback Section Here */}
            </div>
        </div>
    );
};

export default Home;
