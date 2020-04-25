import React from 'react';
import { Input, Dropdown, Menu } from 'antd';
import {
  PlusCircleFilled,
  CaretDownFilled,
  BellFilled,
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

import classes from './index.less';
import UserInfo from './UserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

const navs = [
  { title: '工作台', path: '/dashboard' },
  { title: '文档', path: '/docs', type: 'document' },
  { title: '知识库', path: '/books' },
];

const Top = () => {
  const repository = useSelector((state: RootState) => state.user.repository);

  const documentMenu = (
    <Menu>
      {repository.map((item) => (
        <Menu.Item key={item.id}>
          <Link to={`/docs/${item.id}`}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={classes.top}>
      <div className={classes.header}>
        <Link to="/" className={classes.logo}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png"
            alt=""
          />
          <span>语雀</span>
        </Link>
        <div className={classes.center}>
          <Input.Search placeholder="搜索" className={classes.input} />
          {navs.map((nav) => {
            if (nav.type === 'document') {
              return (
                <Dropdown key={nav.path} overlay={documentMenu}>
                  <NavLink
                    to={nav.path}
                    className={classes.item}
                    activeClassName={classes.active}
                  >
                    {nav.title}
                  </NavLink>
                </Dropdown>
              );
            }
            return (
              <NavLink
                key={nav.path}
                to={nav.path}
                className={classes.item}
                activeClassName={classes.active}
              >
                {nav.title}
              </NavLink>
            );
          })}
        </div>
        <div className={classes.right}>
          <div className={classes.icon}>
            <PlusCircleFilled style={{ cursor: 'pointer' }} />
            <CaretDownFilled className={classes.downIcon} />
          </div>
          <div className={classes.message}>
            <BellFilled style={{ cursor: 'pointer' }} />
          </div>
          <div className={classes.my}>
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
