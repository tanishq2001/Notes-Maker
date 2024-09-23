import React from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div id="branchLists">
            <h3 style={{ fontSize: '37px' }}>
                <Badge bg="secondary">Any Issue? Please Let us Know</Badge>
            </h3>
            <div className="cardContainer"></div>

            <div className="feedback-form-main" id="feedback-id">
                <Container>
                    <Row>
                        <Col md={12} className="feedback-inner p-0">
                            <div className="feedback-title text-center">
                                <h4>Feedback Form</h4>
                                <p>
                                    We would love to hear your thoughts, suggestions, concerns, or problems with anything so we can improve!
                                </p>
                                <hr />
                            </div>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email" className="required">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="email"
                                        placeholder="ex: myname@example.com"
                                        aria-describedby="emailHelp"
                                    />
                                    <Form.Text id="emailHelp">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="branch" className="required">Branch Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="branch"
                                        placeholder="Enter your branch name"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="feedback" className="required">Describe Your Feedback</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        id="feedback"
                                        rows={3}
                                    />
                                </Form.Group>

                                <Button type="submit" id="submit" className="btn btn-primary mb-3 submit-btn">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Feedback;
