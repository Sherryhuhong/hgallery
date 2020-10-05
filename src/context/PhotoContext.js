import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getPhotosByTags } from '../api/photo';

export const PhotoContext = createContext();

const PhotoProvider = (props) => {
  const { children } = props;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPhotos = (tags) => {
    setLoading(true);
    getPhotosByTags()
      .done(function (data) {
        setPhotos(data.items);
      })
      .fail(function () {
        console.log('Failed to fetch photos');
        setPhotos([]);
      })
      .always(function () {
        setLoading(false);
      });
  };

  return (
    <PhotoContext.Provider value={{ photos, loading, searchPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

PhotoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
};

export default PhotoProvider;
