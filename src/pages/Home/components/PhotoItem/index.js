import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import { parseDate } from '../../../../utils';
import PhotoModal from '../PhotoModal';
import styles from './index.module.scss';

export default function PhotoList(props) {
  const { photo } = props;
  const [showModal, setShowModal] = useState(false);

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

  const getAuthorName = (author) => {
    const reg = /\("(.+)"\)$/;
    const match = author.match(reg);
    if (match.length) return match[1];
    return '';
  };

  const showPhotoModal = () => {
    setShowModal(true);
  };

  const hidePhotoModal = () => {
    setShowModal(false);
  };

  return (
    <Col xs={12} md={6} lg={3} className={styles.photoItem}>
      <div onClick={showPhotoModal} className={styles.photoWrapper}>
        {photo.media && photo.media.m && (
          <img src={photo.media.m} alt={getImage(photo.description).alt} />
        )}
        <div className={styles.photoInfo}>
          <div>
            <i className="fas fa-user fa-fw"></i>
            <span>{getAuthorName(photo.author)}</span>
          </div>
          <div className={styles.small}>
            <i className="far fa-clock fa-fw"></i>
            <span>{parseDate(photo.date_taken)}</span>
          </div>
        </div>
      </div>

      <PhotoModal
        photo={photo}
        show={showModal}
        hideModal={hidePhotoModal}
        getImage={getImage}
        getAuthorName={getAuthorName}
      />
    </Col>
  );
}

PhotoList.propTypes = {
  photo: PropTypes.object,
};
