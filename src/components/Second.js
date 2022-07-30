import {Alert} from 'react-bootstrap';
import React, { Component } from 'react';






export default class Second extends Component {
  render() {
    return (
      <div>
     
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
