import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libriries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img
                                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                        alt="google"
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed ac volutpat diam, non dignissim augue. Nulla posuere urna et fermentum bibendum. Nulla tempor libero ligula, ac convallis risus feugiat vitae. Nam suscipit tincidunt felis non tristique. Aenean tincidunt varius volutpat.
                                        Etiam condimentum nulla ac purus molestie posuere in ac quam.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                        alt="google"
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed ac volutpat diam, non dignissim augue. Nulla posuere urna et fermentum bibendum. Nulla tempor libero ligula, ac convallis risus feugiat vitae. Nam suscipit tincidunt felis non tristique. Aenean tincidunt varius volutpat.
                                        Etiam condimentum nulla ac purus molestie posuere in ac quam.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                        alt="google"
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed ac volutpat diam, non dignissim augue. Nulla posuere urna et fermentum bibendum. Nulla tempor libero ligula, ac convallis risus feugiat vitae. Nam suscipit tincidunt felis non tristique. Aenean tincidunt varius volutpat.
                                        Etiam condimentum nulla ac purus molestie posuere in ac quam.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        src="https://buk-journal.ru/wp-content/uploads/2019/01/6a480b3433368df3869014f3f183a1ed.png"
                                        alt="google"
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed ac volutpat diam, non dignissim augue. Nulla posuere urna et fermentum bibendum. Nulla tempor libero ligula, ac convallis risus feugiat vitae. Nam suscipit tincidunt felis non tristique. Aenean tincidunt varius volutpat.
                                        Etiam condimentum nulla ac purus molestie posuere in ac quam.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img
                                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                                        alt="google"
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Sed ac volutpat diam, non dignissim augue. Nulla posuere urna et fermentum bibendum. Nulla tempor libero ligula, ac convallis risus feugiat vitae. Nam suscipit tincidunt felis non tristique. Aenean tincidunt varius volutpat.
                                        Etiam condimentum nulla ac purus molestie posuere in ac quam.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
