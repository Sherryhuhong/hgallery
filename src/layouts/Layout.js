import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import PageHeader from '../components/PageHeader';
import Message from '../components/Message';

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
