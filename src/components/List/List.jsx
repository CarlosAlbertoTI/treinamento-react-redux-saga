import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const List = ({ children }) => <Wrapper>{children}</Wrapper>;

List.defaultProps = {
  children: undefined,
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

List.Item = ListItem;

export default List;
