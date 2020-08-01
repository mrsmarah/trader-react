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
        {/* <div className="newsletter"> */}
          <h6 className="newsletterh6">SUBSCRIBE TO OUR NEWSLETTER</h6>
          {/* <Form className="footerForm"> */}
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
          {/* </Form> */}
        {/* </div> */}

        {/* <div className="links"> */}
          <h6 className="linksh6">USEFUL LINKS</h6>
          {/* <Nav className="mr-auto"> */}
            {/* <div className="link-list"> */}
            <Nav.Link href="#home" className="foteerAtag">Home</Nav.Link>
            <Nav.Link href="#features" className="foteerAtag2">Features</Nav.Link>
            <Nav.Link href="#pricing" className="foteerAtag3">Pricing</Nav.Link>
        {/* </div> */}
          {/* </Nav> */}
        {/* <div className="connect"> */}
          <h6 className="connecth6">CONTACT US</h6>
          <span className="foteerCon">Amman jordan </span>
          <span className="foteerCon2">info@trader.com</span>
          <span className="foteerCon3">T R A D E R &copy; </span>

        {/* <div class="footer-social-icons"> */}
          <h6 className="social-iconsh6">FOLLOW US ON</h6>
          {/* <h4 class="_14">Follow us on</h4> */}
          <div className="social-list">
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

