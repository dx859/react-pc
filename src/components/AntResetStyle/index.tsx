import React from 'react';
import { generate, blue } from '@ant-design/colors';
import styleString from './antResetStyle';

interface AntResetStyleProps {
  primaryColor?: string;
}

const AntResetStyle: React.FC<AntResetStyleProps> = ({ primaryColor }) => {
  let colors = blue;

  if (primaryColor && /^#[0-9a-f]{6}$/i.test(primaryColor)) {
    colors = generate(primaryColor);
  }

  let style = styleString.replace(/@primary([0-9])/g, (a, b) => {
    return colors[b];
  });
  return <style dangerouslySetInnerHTML={{ __html: style }} />;
};

export default AntResetStyle;
