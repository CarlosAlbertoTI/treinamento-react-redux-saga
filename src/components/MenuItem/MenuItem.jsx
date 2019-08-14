import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from './style/MenuItem.scss';

const MenuItem = ({ children, href, title, onClick, style, icon }) => (
  <li className={style.root}>
    <a className={style.container} href={href} title={title} onClick={onClick}>
      <div className={style.center}>
        <FontAwesomeIcon size="2x" icon={icon} />
      </div>
      <div className={style.center}>{children}</div>
    </a>
  </li>
);

MenuItem.defaultProps = {
  href: '#',
  onClick: undefined,
  title: undefined,
  style: Style,
  icon: undefined,
};

MenuItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  icon: PropTypes.objectOf(PropTypes.any),
};

export default MenuItem;
