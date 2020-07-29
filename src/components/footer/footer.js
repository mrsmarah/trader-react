import React from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Form,FormControl,Button,Nav} from 'react-bootstrap';
import ClientComponent from '../chat/index';

const Footer = () => {


  return (
    <>
      <ClientComponent secondUser='ahmad' />

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

        <div className="links">
          <h6 className="newsletterh6">USEFUL LINKS</h6>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
        <div className="connect">
          <h6 className="newsletterh6">CONTACT US</h6>
          <span>Amman jordan </span>
          <span>info@trader.com</span>
          <span>+971 50 650 0690</span>
          <span>T R A D E R &copy; </span>
        </div>  

        <div class="footer-social-icons">
          <h6 className="newsletterh6">FOLLOW US ON</h6>
          {/* <h4 class="_14">Follow us on</h4> */}
          <ul class="social-icons">
            <li><a href="" class="social-icon"> <i class="fa fa-facebook"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-twitter"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-rss"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-youtube"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            <li><a href="" class="social-icon"> <i class="fa fa-github"></i></a></li>
          </ul>
        </div> 
      </Navbar>
    </>
  );
};

export default Footer;

