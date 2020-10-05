import React, { useState, useContext, useEffect } from 'react';
import { PhotoContext } from '../../../context/PhotoContext';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import styles from './SearchInput.module.scss';

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
    // <div className={styles.search}>
    //   <span className={styles.searchIcon}><i className="fa fa-search"></i></span>
    //   <input type="text" onChange={(e) => setSearchQuery(e.target.value)} className={`form-control ${styles.searchInput}`} placeholder="Search for photos" />
    // </div>

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
