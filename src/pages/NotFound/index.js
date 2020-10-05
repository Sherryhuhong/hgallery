import React from 'react';
import Container from 'react-bootstrap/Container';
import Layout from '../../layouts/Layout';
import styles from './index.module.scss';

export default function NotFound() {
  return (
    <Layout>
      <Container className={styles.infoWrapper}>
        <div className={styles.info}>
          <h1>Whoops, 404</h1>
          <p>The page you were looking for does not exist</p>
        </div>
      </Container>
    </Layout>
  );
}
