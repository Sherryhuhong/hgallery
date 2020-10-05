import React from 'react';
import SearchInput from './SearchInput';
import styles from './Banner.module.scss';
import backgroundImage from '../../../assets/banner-bg.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Banner() {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className={styles.searchWrapper}>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <SearchInput />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
