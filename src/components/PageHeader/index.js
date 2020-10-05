import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './PageHeader.module.scss';

export default function PageHead() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className={`py-0 ${styles.logoWrapper}`}>
        <Nav.Link as={Link} to="/">
          <img src={logo} alt="logo hgallery" className={styles.logo} />
        </Nav.Link>
      </Navbar.Brand>
    </Navbar>
  );
}
