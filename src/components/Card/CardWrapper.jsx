import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
`;

const CardWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

CardWrapper.defaultProps = {
  children: undefined,
};

CardWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default CardWrapper;
