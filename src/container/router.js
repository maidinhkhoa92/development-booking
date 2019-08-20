import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import RootContainer from 'container/RootContainer';

import Home from 'container/Home';
import HotelList from 'container/Hotel';
import HotelDetailContainer from 'container/Hotel/Detail';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hotel" component={HotelList} />
          <Route exact path="/hotel/:id" component={HotelDetailContainer} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
