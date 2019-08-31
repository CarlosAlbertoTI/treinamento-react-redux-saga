import React from 'react';
import PropTypes from 'prop-types';
import View from '../components/View';
import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';

const ViewContainer = ({ children, ...others }) => (
  <View header={<HeaderContainer />} footer={<FooterContainer />} {...others}>
    {children}
  </View>
);

ViewContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

ViewContainer.defaultProps = {
  children: undefined,
};

export default ViewContainer;
