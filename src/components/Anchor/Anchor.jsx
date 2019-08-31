import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a``;

const Anchor = ({ href, onClick, title, children }) => (
  <Wrapper href={href} onClick={onClick} title={title}>
    {children}
  </Wrapper>
);

Anchor.defaultProps = {
  href: '#',
  title: undefined,
  onClick: undefined,
};

Anchor.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Anchor;
