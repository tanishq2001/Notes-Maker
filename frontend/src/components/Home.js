import React from 'react';
import { Container, Accordion, Card } from 'react-bootstrap';
import YearDropdown from './YearDropdown';  // Assuming you've already defined YearDropdown

const Home = () => {
    const yearsData = [
        {
            year: "First Year",
            subjects: [
                {
                    name: "Physics",
                    papers: [{ label: "Download Physics Paper", url: "https://example.com/physics" }]
                },
                {
                    name: "Chemistry",
                    papers: [{ label: "Download Chemistry Paper", url: "https://example.com/chemistry" }]
                },
                {
                    name: "Maths",
                    papers: [{ label: "Download Maths Paper", url: "https://example.com/maths" }]
                }
            ]
        },
        {
            year: "Second Year",
            subjects: [
                {
                    name: "Discrete Structure",
                    papers: [{ label: "Download Discrete Structure Paper", url: "https://example.com/discrete" }]
                },
                {
                    name: "Data Structure",
                    papers: [{ label: "Download Data Structure Paper", url: "https://example.com/data-structure" }]
                }
            ]
        },
        // Add more year and subject data as needed
    ];

    return (
        <Container className="my-4">
            <h3 className="mb-4"><span className="badge bg-secondary">Past Year Papers</span></h3>
            <Accordion defaultActiveKey="0">
                {yearsData.map((yearData, index) => (
                    <YearDropdown
                        key={index}
                        year={yearData.year}
                        subjects={yearData.subjects}
                        eventKey={index.toString()} // Ensure each dropdown has a unique key
                        variant={index % 2 === 0 ? "info" : "success"}  // Change colors alternately
                    />
                ))}
            </Accordion>
        </Container>
    );
};

export default Home;
