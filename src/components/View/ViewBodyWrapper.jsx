import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  max-width: 1020px;
  margin: 0 auto;
  min-height: 800px;
`;

const ViewBodyWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

ViewBodyWrapper.defaultProps = {
  children: undefined,
};

ViewBodyWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ViewBodyWrapper;
