import React from 'react';
import RegisterIcon from "../../assets/registerIcon.svg"
import AdminIcon from "../../assets/adminIcon.svg"
import DashboarIcon from "../../assets/dashboarIcon.svg"

import { ScreenContainer,ContainerFlex,NavContainer,ContentContainer,PageHeader, ArrowLeftIcon, FooterContainer } from './BaseScreenCss';

const components: React.FC = () => {
  return(
    <ScreenContainer>
      <ContainerFlex>
        <NavContainer>
          <ArrowLeftIcon/>
          <PageHeader> Membros</PageHeader>
        </NavContainer>
          <ContentContainer></ContentContainer>       
      </ContainerFlex>
      <FooterContainer> 
      <img src={RegisterIcon} style={{width:"45px", height: "45px"}} />
      <img src={DashboarIcon} style={{width:"60px", height: "38px"}} />
      <img src={AdminIcon } style={{width:"42px", height: "42px"}} />

      </FooterContainer>
    </ScreenContainer>
  );
}

export default components;