import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-set text-light py-4">
      <Container>
        <Row>
          <Col md={2}>
            <h5 className='mb-2'>Company</h5>
            <ul className="list-unstyled">
              <li className='mb-1'><Link to="/about" className="text-light link-underline link-underline-opacity-0">About</Link></li>
              <li className='mb-1'><Link to="/jobs" className="text-light link-underline link-underline-opacity-0">Jobs</Link></li>
              <li className='mb-1'><Link to="/for-the-record" className="text-light link-underline link-underline-opacity-0">For the Record</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Communities</h5>
            <ul className="list-unstyled ">
              <li className='mb-1'><Link to="/for-artists" className="text-light link-underline link-underline-opacity-0">For Artists</Link></li>
              <li className='mb-1'><Link to="/developers" className="text-light link-underline link-underline-opacity-0">Developers</Link></li>
              <li className='mb-1'><Link to="/advertising" className="text-light link-underline link-underline-opacity-0">Advertising</Link></li>
              <li className='mb-1'><Link to="/investors" className="text-light link-underline link-underline-opacity-0">Investors</Link></li>
              <li className='mb-1'><Link to="/vendors" className="text-light link-underline link-underline-opacity-0">Vendors</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Useful links</h5>
            <ul className="list-unstyled">
              <li className='mb-1'><Link to="/support" className="text-light link-underline link-underline-opacity-0">Support</Link></li>
              <li className='mb-1'><Link to="/free-mobile-app" className="text-light link-underline link-underline-opacity-0">Free Mobile App</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Spotify Plans</h5>
            <ul className="list-unstyled">
              <li className='mb-1'><Link to="/premium-individual" className="link-underline link-underline-opacity-0 text-light">Premium Individual</Link></li>
              <li className='mb-1'><Link to="/premium-duo" className="link-underline link-underline-opacity-0 text-light">Premium Duo</Link></li>
              <li className='mb-1'><Link to="/premium-family" className="link-underline link-underline-opacity-0 text-light">Premium Family</Link></li>
              <li className='mb-1'><Link to="/premium-student" className="link-underline link-underline-opacity-0 text-light">Premium Student</Link></li>
              <li className='mb-1'><Link to="/spotify-free" className="link-underline link-underline-opacity-0 text-light">Spotify Free</Link></li>
            </ul>
          </Col>
          <Col md={2} className="text-center text-md-right">
            <Link to="#" className="text-light mx-2 rounded-3 bg-secondary p-2"><FaInstagram /></Link>
            <Link to="#" className="text-light mx-2 rounded-3 bg-secondary p-2"><FaTwitter /></Link>
            <Link to="#" className="text-light mx-2 rounded-3 bg-secondary p-2"><FaFacebookF /></Link>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center text-md-left">
            <p className="mb-0">© 2024 Omraje Ambure Officaly</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
