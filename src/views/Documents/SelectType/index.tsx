import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';
import { Button } from 'antd';
import classes from './index.less';
import { useHistory } from 'react-router-dom';

const SelectType = () => {
  const repository = useSelector((state: RootState) => state.user.repository);
  const history = useHistory();

  function toPage(id: string) {
    history.push('/docs/' + id);
  }

  return (
    <div className={classes.item}>
      {repository.map((item) => (
        <Button key={item.id} onClick={() => toPage(item.id)}>
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default SelectType;
