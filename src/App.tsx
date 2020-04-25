import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Layout from './views/Layout';
import LoginLayout from './views/LoginLayout';
import { userFetchInfo } from './reducers/user';
import Login from './views/Login';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userFetchInfo());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/login">
        <LoginLayout>
          <Login />
        </LoginLayout>
      </Route>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
