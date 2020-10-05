import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import backgroundImage from '../../../../assets/banner-bg.jpg';
import SearchInput from '../SearchInput';
import styles from './index.module.scss';

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
