import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { PhotoContext } from '../../../../context/PhotoContext';
import styles from './index.module.scss';


export default function SearchInput() {
  const { searchPhotos } = useContext(PhotoContext);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      searchPhotos(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="search-icon">
          <i className="fa fa-search"></i>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        placeholder="Search for photos"
        aria-label="Search for photos"
        aria-describedby="search-icon"
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
    </InputGroup>
  );
}
