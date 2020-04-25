import React from 'react';
import { Spin } from 'antd';
import classes from './index.less';

const Loading = () => {
  return (
    <div className={classes.loading}>
      <Spin />
    </div>
  );
};

export default Loading;
