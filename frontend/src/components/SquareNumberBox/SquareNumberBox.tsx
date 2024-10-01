import React from 'react';

import {SquareNumberBoxContainer, SquareBoxContent, BoxTitle,Number} from './SquareNumberBoxCss'

interface SquareNumberBoxProps {
   title: string;
   result: number;
}

const SquareBox: React.FC<SquareNumberBoxProps> = ({title, result}) => {
  return (
   <SquareNumberBoxContainer>
      <BoxTitle>
         {title}
      </BoxTitle>
      <SquareBoxContent>  
         <Number>{result}</Number>   
      </SquareBoxContent>
   </SquareNumberBoxContainer>
  )
}

export default SquareBox;