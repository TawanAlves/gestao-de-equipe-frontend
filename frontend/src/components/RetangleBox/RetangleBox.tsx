import React from 'react';
import { RetangleBoxContainer, LeftBoxContainer, MiddleBoxContainer, RigthBoxContainer } from './RetangleBoxCss';

interface RetangleBoxProps{
   children: React.ReactNode[];
   style?: React.CSSProperties;
}

const RetangleBox: React.FC<RetangleBoxProps> = ({children, style}) => {
   const [left, middle, right] = children;

  return (
   <RetangleBoxContainer style={style}>   
         <LeftBoxContainer>
         {left}
         </LeftBoxContainer>
         <MiddleBoxContainer>
         {middle}
         </MiddleBoxContainer>
         <RigthBoxContainer>
         {right}
         </RigthBoxContainer>      
   </RetangleBoxContainer>
  );
}

export default RetangleBox;