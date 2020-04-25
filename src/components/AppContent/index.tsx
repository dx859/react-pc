import React from 'react';
import classes from './index.less';
const AppContent: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className, style, children }) => {
  className = classes.content + (className ? ' ' + className : '');
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default AppContent;
