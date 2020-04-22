import React, { useState } from 'react';
import { Button } from 'antd';
import AntResetStyle from './components/AntResetStyle';

function App() {
  const [color, setColor] = useState('#FF5F00');
  return (
    <>
      <AntResetStyle primaryColor={color} />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <Button type="primary">按钮</Button>
    </>
  );
}

export default App;
