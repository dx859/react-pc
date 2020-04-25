import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContent from '@/components/AppContent';
import Sidebar from './Sidebar';
import classes from './index.less';
import SelectType from './SelectType';

const Documents = () => {
  return (
    <AppContent className={classes.wrap}>
      <Switch>
        <Route exact path="/docs">
          <SelectType />
        </Route>
        <Route path="/docs/:repository_id">
          <Sidebar />
          <div className={classes.right}>right</div>
        </Route>
      </Switch>
    </AppContent>
  );
};

export default Documents;
