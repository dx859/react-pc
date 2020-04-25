import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import Top from './Top';
import { Switch, Route, Redirect } from 'react-router-dom';
import Documents from '../Documents';
import { RootState } from '@/reducers';

import Loading from '@/components/Loading';

const Layout = () => {
  const { isLoad, isLogin } = useSelector(
    (state: RootState) => ({
      isLogin: state.user.isLogin,
      isLoad: state.user.isLoad,
    }),
    shallowEqual
  );

  if (!isLoad) {
    return <Loading />;
  }

  if (!isLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Top />
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path="/docs">
          <Documents />
        </Route>
      </Switch>
    </>
  );
};

export default Layout;
