import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { toLoadable } from '@/utils';
import Layout from './components/layout/Layout.component';

// Lazy Loading Views
const IndexView = toLoadable(() => import('@/views/index/Index.view'));

const Redirect404View = toLoadable(
  () => import('@/views/404/Redirect404.view')
);

const Routes: FC = () => (
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={IndexView} />

        <Route component={Redirect404View} />
      </Switch>
    </Router>
  </Layout>
);

export default Routes;
