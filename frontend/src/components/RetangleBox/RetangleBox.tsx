import React from 'react';
import { RetangleBoxContainer } from './RetangleBoxCss';

interface RetangleBoxProps{
   children: React.ReactNode;
   style?: React.CSSProperties;
}

const RetangleBox: React.FC<RetangleBoxProps> = ({children, style}) => {
  return (
   <RetangleBoxContainer style={style}>
      {children}
   </RetangleBoxContainer>
  );
}

export default RetangleBox;