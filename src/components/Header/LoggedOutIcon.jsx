import React from 'react';

import UserIcon from '../../images/User';
import DeactivatedBadge from '../../images/DeactivatedBadge';
import Style from './style/Header.scss';

export default () => (
  <div className={Style.userIconContainer}>
    <UserIcon />
    <div className={Style.userBadgeStatusContainer}>
      <DeactivatedBadge />
    </div>
  </div>
);
