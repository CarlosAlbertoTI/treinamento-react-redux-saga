import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.h2``;

const ViewSubtitle = ({ children }) => <Wrapper>{children}</Wrapper>;

ViewSubtitle.defaultProps = {
  children: undefined,
};

ViewSubtitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ViewSubtitle;
