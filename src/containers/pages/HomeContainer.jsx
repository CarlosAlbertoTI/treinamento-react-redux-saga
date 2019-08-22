import React from 'react';
import { connect } from 'react-redux';
import ViewContainer from '../ViewContainer';

const HomeContainer = () => <ViewContainer title="Home page" />;

export default connect()(HomeContainer);
