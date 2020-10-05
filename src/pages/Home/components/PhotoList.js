import React, { useContext } from 'react';
import { PhotoContext } from '../../../context/PhotoContext';

export default function PhotoList() {
  const { photos } = useContext(PhotoContext);

  const getImage = (description) => {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = description;
    const img = wrapper.querySelector('img');
    return {
      width: img.getAttribute('width'),
      height: img.getAttribute('height'),
      alt: img.getAttribute('alt'),
    };
  };

  return (
    <div>
      {photos.map((item, index) => (
        <a href={item.link} key={index}>
          <div>{item.title}</div>
          {item.media && item.media.m && (
            <img src={item.media.m} alt={getImage(item.description).alt} />
          )}
        </a>
      ))}
    </div>
  );
}
