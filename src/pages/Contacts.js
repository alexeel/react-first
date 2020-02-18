import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <h1>Contact us:</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email-address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>We`ll never share your email with someone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example Textarea</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out!" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}
