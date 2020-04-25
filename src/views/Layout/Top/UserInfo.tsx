import React from 'react';
import { Popover } from 'antd';
import { CaretDownFilled, LogoutOutlined } from '@ant-design/icons';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '@/reducers';

import indexClasses from './index.less';
import classes from './UserInfo.less';
import { userLogout } from '@/reducers/user';

const UserInfo = () => {
  const { username } = useSelector(
    (state: RootState) => ({ username: state.user.username }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  const content = (
    <>
      <div className={classes.menuItem} onClick={logout}>
        <LogoutOutlined style={{ marginRight: 5 }} /> 退出
      </div>
    </>
  );
  return (
    <>
      <Popover
        overlayClassName={classes.popover}
        content={content}
        title={username}
        trigger="click"
      >
        <img
          className={classes.usericon}
          src="https://cdn.nlark.com/yuque/0/2020/jpeg/anonymous/1578564147817-24d43b30-182c-49c1-ae0f-bd3f79d13a7c.jpeg?x-oss-process=image%2Fresize%2Cm_fill%2Cw_48%2Ch_48%2Fformat%2Cpng"
          alt=""
        />
      </Popover>
      <CaretDownFilled className={indexClasses.imgdown} />
    </>
  );
};

export default UserInfo;
