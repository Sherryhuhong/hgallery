import React, { useContext } from 'react';
import { PhotoContext } from '../../context/PhotoContext';
import Loader from '../../components/Loader';
import Layout from '../../layouts/Layout';
import PhotoList from './components/PhotoList';
import Banner from './components/Banner';

export default function Home() {
  const { loading } = useContext(PhotoContext);

  return (
    <Layout>
      <Banner />
      {loading ? <Loader /> : <PhotoList />}
    </Layout>
  );
}
