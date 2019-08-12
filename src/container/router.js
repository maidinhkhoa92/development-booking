import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import RootContainer from 'container/RootContainer';

import Home from 'container/Home';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
