import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/MainMenu.scss';

const MainMenu = ({ children, style }) => <nav className={style.inline}>{children}</nav>;

MainMenu.defaultProps = {
  style: Style,
};

MainMenu.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainMenu;
