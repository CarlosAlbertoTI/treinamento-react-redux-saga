import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const ViewHeaderWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

ViewHeaderWrapper.defaultProps = {
  children: undefined,
};

ViewHeaderWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default ViewHeaderWrapper;
