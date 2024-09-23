import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const PaperSection = ({ title, papers }) => {
    const [open, setOpen] = useState(false);  // State to handle collapse

    return (
        <Card className="mb-2">
            <Card.Header>
                <Button
                    onClick={() => setOpen(!open)}  // Toggle collapse on click
                    aria-controls={`collapse-${title}`}
                    aria-expanded={open}
                    variant="dark"
                    className="w-100 text-left"
                >
                    {title}  {/* Subject title like Physics, Chemistry */}
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <div id={`collapse-${title}`}>
                    <Card.Body>
                        <ul>
                            {papers.map((paper, index) => (
                                <li key={index}>
                                    <a href={paper.url} target="_blank" rel="noopener noreferrer">
                                        {paper.label}  {/* Paper download link */}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
};

export default PaperSection;
