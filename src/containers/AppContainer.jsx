import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { getHistory } from '../utils';
import HomeContainer from './pages/HomeContainer';
import SignInContainer from './pages/SignInContainer';
import SignUpContainer from './pages/SignUpContainer';
import { themes } from '../css.settings';

const App = () => (
  <>
    <ThemeProvider theme={themes.default}>
      <Router history={getHistory()}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/signin" component={SignInContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
