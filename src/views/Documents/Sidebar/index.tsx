import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';

import classes from './index.less';
import apiFetch from '@/utils/apiFetch';
import { useParams, useHistory } from 'react-router-dom';
import { tranformTreeData } from '@/utils/common';

const Sidebar = () => {
  const history = useHistory();
  const { repository_id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    apiFetch('/document', { repository_id }).then((data: any) => {
      setList(tranformTreeData(data));
    });
  }, []);

  return <div className={classes.side}></div>;
};

export default Sidebar;
