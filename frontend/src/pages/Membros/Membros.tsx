import React from 'react';
//Components
import BaseScreen from '../../components/Screen/BaseScreen'
import RetangleBox  from '../../components/RetangleBox/RetangleBox';
import Circle  from '../../assets/circle_ios.png';

import { TextInput, ContentContainer,ArrowRightIcon, LeftBoxContainer,MiddleBoxContainer,RigthBoxContainer,Name } from './MembrosCss';


const Membros: React.FC = () => {
  return (
    <BaseScreen header="Membros">
      <ContentContainer>
          <p style={{textAlign: "left", paddingBottom:"4px", paddingLeft: "6px"}}>Filtrar por regional</p>
          <TextInput placeholder="Todas" style={{marginBottom:"49px"}} />
          <RetangleBox>
            <LeftBoxContainer>  
              <p>IOS</p>
            </LeftBoxContainer>
            <MiddleBoxContainer>
                <Name  >Henrique Andrade Serra</Name>
                <p style={{fontSize:"12px", textAlign:"left"}} >Oficial - 24 anos</p>
            </MiddleBoxContainer>
            <RigthBoxContainer>
              <ArrowRightIcon/>
            </RigthBoxContainer>            
          </RetangleBox>   
      </ContentContainer>
    </BaseScreen>
)}

export default Membros;