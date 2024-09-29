import React from 'react';
//Components
import BaseScreen from '../../components/Screen/BaseScreen'
import RetangleBox  from '../../components/RetangleBox/RetangleBox';

import { TextInput, ContentContainer,ArrowRightIcon,Name } from './MembrosCss';

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
    <BaseScreen header="Membros" showArrow ={true} arrowRoute= "/">
      <ContentContainer>
          <p style={{textAlign: "left", paddingBottom:"4px", paddingLeft: "6px"}}>Filtrar por regional</p>
          <TextInput placeholder="Todas" style={{marginBottom:"49px"}} />
        {items.map((item, index) => (
                <RetangleBox
                  key={index}
                  style={{borderRadius:"100px 10px 10px 100px", marginBottom: index !== items.length - 1 ? '15px' : '0' }}
                >
                  <div>  
                    <p>IOS</p>
                  </div>
                  <div>
                    <Name>{item.name}</Name>
                    <p style={{ fontSize: "12px", textAlign: "left" }}>{item.description}</p>
                  </div>
                  <div>
                    <ArrowRightIcon />
                  </div>
                </RetangleBox>
              ))}
            
      </ContentContainer>
    </BaseScreen>
)}

export default Membros;