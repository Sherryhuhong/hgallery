import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PageHeader from '../components/PageHeader';

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <PageHeader />
      {children}
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
