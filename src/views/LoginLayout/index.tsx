import React from 'react';
import Loading from '@/components/Loading';
import { Redirect } from 'react-router-dom';
import { RootState } from '@/reducers';
import { useSelector, shallowEqual } from 'react-redux';

const LoginLayout: React.FC = ({ children }) => {
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
  if (isLogin) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
};

export default LoginLayout;
