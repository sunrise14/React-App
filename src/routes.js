import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './layout/layout';
import SpecificDetails from './components/Details/detail';
import Profile from './components/Profile/profile';

class Routes extends Component {
  render() {
    return (
      <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/data/:id" exact component={SpecificDetails} />
              </Switch>
          </Layout>

    );
  }
}

export default Routes;
