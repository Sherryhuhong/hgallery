import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../components/PageHeader';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <PageHeader />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
