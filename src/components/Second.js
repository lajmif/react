import {Alert} from 'react-bootstrap';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';






export default class Second extends Component {
  render() {
    return (
      <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <h1 className='welcum'>
  Greetings ladies and gentlemen, You have just entered my amazing react app.
  </h1>
  <hr />
  <h1 className="welcumm">
  Feel free to contact a supervisor for help. contact-us@gmail.com 
  </h1>
</Alert>
    
      </div>
    )
  }
}
