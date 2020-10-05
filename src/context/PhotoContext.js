import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { getPhotosByTags } from '../api/photo';

export const PhotoContext = createContext();

const PhotoProvider = (props) => {
  const { children } = props;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const searchPhotos = async (tags) => {
    try {
      setLoading(true);
      const response = await getPhotosByTags(tags);
      setPhotos(response.data.items);
    } catch (err) {
      setMessage('Failed to fetch photos');
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  const resetMessage = () => {
    setMessage('');
  };

  return (
    <PhotoContext.Provider
      value={{ photos, loading, searchPhotos, message, resetMessage }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
};

export default PhotoProvider;
