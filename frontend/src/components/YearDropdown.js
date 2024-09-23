import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import PaperSection from './PaperSection';

const YearDropdown = ({ year, subjects, eventKey, variant }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className="mb-3">
            <Card.Header>
                <Button
                    variant={variant}  // Alternating colors
                    onClick={() => setOpen(!open)}
                    aria-controls={`collapse-${eventKey}`}
                    aria-expanded={open}
                    className="w-100 text-left"
                >
                    {year}  {/* Year title (e.g., First Year, Second Year) */}
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <div id={`collapse-${eventKey}`}>
                    <Card.Body>
                        {subjects.map((subject, index) => (
                            <PaperSection key={index} title={subject.name} papers={subject.papers} />
                        ))}
                    </Card.Body>
                </div>
            </Collapse>
        </Card>
    );
};

export default YearDropdown;
