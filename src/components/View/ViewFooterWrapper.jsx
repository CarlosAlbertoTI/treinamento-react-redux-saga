import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ViewFooterWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

ViewFooterWrapper.defaultProps = {
  children: undefined,
};

ViewFooterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ViewFooterWrapper;
