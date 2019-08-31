import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  min-height: 40px;
  align-items: center;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #ececec;
`;

const CardHeader = ({ children }) => <Wrapper>{children}</Wrapper>;

CardHeader.defaultProps = {
  children: undefined,
};

CardHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default CardHeader;
