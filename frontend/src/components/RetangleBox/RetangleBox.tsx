import React from 'react';
import { RetangleBoxContainer } from './RetangleBoxCss';

interface RetangleBoxProps{
   children: React.ReactNode;
}

const RetangleBox: React.FC<RetangleBoxProps> = ({children}) => {
  return (
   <RetangleBoxContainer>
      {children}
   </RetangleBoxContainer>
  );
}

export default RetangleBox;