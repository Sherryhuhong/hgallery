import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Loader from '../../components/Loader';
import { PhotoContext } from '../../context/PhotoContext';
import Layout from '../../layouts/Layout';
import Banner from './components/Banner';
import PhotoList from './components/PhotoList';

export default function Home() {
  const { loading } = useContext(PhotoContext);

  return (
    <Layout>
      <Banner />
      <Container className="my-5">
        {loading ? <Loader /> : <PhotoList />}
      </Container>
    </Layout>
  );
}
