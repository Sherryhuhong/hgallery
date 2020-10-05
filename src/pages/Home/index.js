import React, { useContext } from 'react';
import { PhotoContext } from '../../context/PhotoContext';
import Loader from '../../components/Loader';
import PhotoList from './components/PhotoList';
import SearchInput from './components/SearchInput';

export default function Home() {
  const { loading } = useContext(PhotoContext);

  return (
    <div>
      <h1>Home Page</h1>
      <SearchInput />
      {loading ? <Loader /> : <PhotoList />}
    </div>
  );
}
