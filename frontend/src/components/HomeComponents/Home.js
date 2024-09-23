import React from 'react';
import Contents from './Contents.js';
import Data from '../../Data.js';
import Feedback from './Feedback.js';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    const contentData = Data;

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}> {/* Adjust the width as necessary */}
                    <div id="questionPapers" className="text-center mb-5">
                        {contentData.filter(item => item.type === "Past Year Papers").map((item, index) => (
                            <Contents key={index} title={item.type} data={item.data} />
                        ))}
                    </div>
                    <div id="notes" className="text-center mb-5">
                        {contentData.filter(item => item.type === "Notes").map((item, index) => (
                            <Contents key={index} title={item.type} data={item.data} />
                        ))}
                    </div>
                    <div id="feedback" className="text-center">
                        <Feedback />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
