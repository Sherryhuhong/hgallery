import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { parseDate } from '../../../../utils';
import styles from './index.module.scss';

export default function PhotoList(props) {
  const { photo } = props;
  const [show, setShow] = useState(false);

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

  const getTags = (tags) => {
    const tagsList = tags.split(' ').filter((v) => !!v);
    return tagsList;
  };

  return (
    <Col xs={12} md={6} lg={3} className={styles.photoItem}>
      <div onClick={() => setShow(true)} className={styles.photoWrapper}>
        {/* <div>{photo.title}</div> */}
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

      <Modal
        show={show}
        centered={true}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title" className={styles.modalTitle}>
            Photo details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="my-2">
            <Row>
              <Col xs={12} lg={4} className={styles.modalPhoto}>
                {photo.media && photo.media.m && (
                  <img
                    src={photo.media.m}
                    alt={getImage(photo.description).alt}
                  />
                )}
              </Col>
              <Col xs={12} lg={8}>
                {photo.author && (
                  <div className={styles.detail}>
                    <i className="fas fa-user fa-fw"></i>
                    <span>{getAuthorName(photo.author)}</span>
                  </div>
                )}
                {photo.title.trim() && (
                  <div className={`${styles.detail} ${styles.small}`}>
                    <i className="fas fa-heading fa-fw"></i>
                    <span>{photo.title}</span>
                  </div>
                )}
                {photo.date_taken && (
                  <div className={`${styles.detail} ${styles.small}`}>
                    <i className="far fa-clock fa-fw"></i>
                    <span>{parseDate(photo.date_taken)}</span>
                  </div>
                )}
                <Button
                  variant="primary"
                  href={photo.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.button}
                >
                  Original image
                  <i className="fas fa-external-link-alt fa-fw ml-1"></i>
                </Button>{' '}
                <div className={styles.detail}>
                  {getTags(photo.tags).length > 0 && (
                    <i className="fas fa-tags fa-fw"></i>
                  )}
                  {getTags(photo.tags).map((item, index) => (
                    <Badge
                      key={index}
                      pill
                      variant="secondary"
                      className="mr-1"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  );
}

PhotoList.propTypes = {
  photo: PropTypes.object,
};
