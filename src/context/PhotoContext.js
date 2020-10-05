import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import { getPhotosByTags } from '../api/photo';

export const PhotoContext = createContext();

const PhotoProvider = (props) => {
  const { children } = props;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const searchPhotos = (tags) => {
    setLoading(true);
    getPhotosByTags(tags)
      .done(function (data) {
        setPhotos(data.items);
      })
      .fail(function () {
        setMessage('Failed to fetch photos');
        setPhotos([]);
      })
      .always(function () {
        setLoading(false);
      });
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
