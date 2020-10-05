import React from 'react';
import logo from '../../assets/logo.png';
import styles from './PageHeader.module.scss';
import Navbar from 'react-bootstrap/Navbar';

export default function PageHead() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className={`py-0 ${styles.logoWrapper}`}>
        <img src={logo} alt="logo hgallery" className={styles.logo} />
      </Navbar.Brand>
    </Navbar>
  );
}
