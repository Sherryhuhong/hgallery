import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Message from '../components/Message';
import PageHeader from '../components/PageHeader';

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <PageHeader />
      {children}
      <Message />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
