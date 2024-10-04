import React from 'react';

import {SquareBoxContainer, SquareBoxContent, LeftContent,RightContent, BoxTitle, ContentTitle, Number} from './SquareBoxCss'

interface SquareBoxProps {
   title: string;
   aplicou: number;
   recebeu: number;
}

const SquareBox: React.FC<SquareBoxProps> = ({title, aplicou, recebeu}) => {
  return (
   <SquareBoxContainer>
      <BoxTitle>
         {title}
         </BoxTitle>
      <SquareBoxContent>
      <LeftContent>

      <ContentTitle>Aplicou</ContentTitle>
      <Number>{aplicou} </Number>
      </LeftContent>
      <RightContent>

      <ContentTitle>Recebeu</ContentTitle>
      <Number>{recebeu}</Number>
      </RightContent>
      </SquareBoxContent>

   </SquareBoxContainer>
  )
}

export default SquareBox;