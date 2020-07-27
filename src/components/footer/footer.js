import React from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="light" variant="light" className="footer">
      <div className="newsletter">
        <h6 className="newsletterh6">SUBSCRIBE TO OUR NEWSLETTER</h6>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
            <Button variant="light" type="submit" className="buttonnn">
            Submit
            </Button>
        </Form>
        </div>
    </Navbar>

  );
};

export default Footer;

