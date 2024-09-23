import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import YearDropdown from './YearDropdown';

const Contents = ({ title, data }) => {
    return (
        <Container className="my-4">
            <h3 className="mb-4"><span className="badge bg-secondary">{title}</span></h3>
            <Accordion defaultActiveKey="0">
                {data.map((yearData, index) => (
                    <YearDropdown
                        key={index}
                        year={yearData.year}
                        subjects={yearData.subjects}
                        eventKey={index.toString()}
                        variant={index % 2 === 0 ? "info" : "success"}  // Alternating colors
                    />
                ))}
            </Accordion>
        </Container>
    );
};

export default Contents;
