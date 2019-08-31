import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  min-height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: #e3e3e3;
  ${props =>
    props.divider &&
    `
    font-size: 0.8em;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #f9f9f9;
  `}
`;

const ListItem = ({ children, divider }) => <Wrapper divider={divider}>{children}</Wrapper>;

ListItem.defaultProps = {
  children: undefined,
  divider: false,
};

ListItem.propTypes = {
  divider: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ListItem;
