import React, { useState, useContext, useEffect } from 'react';
import { PhotoContext } from '../../../context/PhotoContext';

export default function SearchInput() {
  const { searchPhotos } = useContext(PhotoContext);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchQuery)
      searchPhotos(searchQuery);
    }, 1000)

    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <div>
      <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
}