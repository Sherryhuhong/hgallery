import React, { useState, useContext } from 'react';
import { PhotoContext } from '../../../context/PhotoContext';

export default function SearchInput() {
  const { searchPhotos } = useContext(PhotoContext);
  const [searchQuery, setSearchQuery] = useState('');

  const updateSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const submitSearch = () => {
    searchPhotos(searchQuery);
  };

  return (
    <div>
      <input type="text" onChange={updateSearchInput} />
      <button onClick={submitSearch}>Submit</button>
    </div>
  );
}
