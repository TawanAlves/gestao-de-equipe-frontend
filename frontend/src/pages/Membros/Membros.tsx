import React from 'react';
//Components
import BaseScreen from '../../components/Screen/BaseScreen'
import RetangleBox  from '../../components/RetangleBox/RetangleBox';
import Circle  from '../../assets/circle_ios.png';

import { TextInput, ContentContainer,ArrowRightIcon, LeftBoxContainer,MiddleBoxContainer,RigthBoxContainer,Name } from './MembrosCss';

const items = [
  { name: "Henrique Andrade Serra", description: "Oficial - 24 anos" },
  { name: "Rafaela Rey", description: "Oficial - 24 anos" },
  { name: "Henrique Andrade Serra", description: "Oficial - 24 anos" },
  { name: "Rafaela Rey", description: "Oficial - 24 anos" },
  { name: "Henrique Andrade Serra", description: "Oficial - 24 anos" },
  { name: "Rafaela Rey", description: "Oficial - 24 anos" },

];


const Membros: React.FC = () => {
  return (
    <BaseScreen header="Membros">
      <ContentContainer>
          <p style={{textAlign: "left", paddingBottom:"4px", paddingLeft: "6px"}}>Filtrar por regional</p>
          <TextInput placeholder="Todas" style={{marginBottom:"49px"}} />
        {items.map((item, index) => (
                <RetangleBox
                  key={index}
                  style={{ marginBottom: index !== items.length - 1 ? '15px' : '0' }}
                >
                  <LeftBoxContainer>  
                    <p>IOS</p>
                  </LeftBoxContainer>
                  <MiddleBoxContainer>
                    <Name>{item.name}</Name>
                    <p style={{ fontSize: "12px", textAlign: "left" }}>{item.description}</p>
                  </MiddleBoxContainer>
                  <RigthBoxContainer>
                    <ArrowRightIcon />
                  </RigthBoxContainer>
                </RetangleBox>
              ))}
            
      </ContentContainer>
    </BaseScreen>
)}

export default Membros;