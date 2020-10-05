import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { PhotoContext } from '../../../../context/PhotoContext';
import PhotoItem from '../PhotoItem';
import styles from './index.module.scss';

export default function PhotoList() {
  const { photos } = useContext(PhotoContext);

  return (
    <Row>
      {photos.map((item, index) => (
        <PhotoItem key={index} photo={item} />
      ))}
    </Row>
  );
}
