import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h1``;

const ViewTitle = ({ children }) => <Wrapper>{children}</Wrapper>;

ViewTitle.defaultProps = {
  children: undefined,
};

ViewTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ViewTitle;
