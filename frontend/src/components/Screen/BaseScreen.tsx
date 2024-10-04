import React, { Children } from 'react';
import RegisterIcon from "../../assets/registerIcon.svg"
import AdminIcon from "../../assets/adminIcon.svg"
import DashboarIcon from "../../assets/dashboarIcon.svg"
import { useNavigate } from 'react-router-dom';

import { ScreenContainer,ContainerFlex,NavContainer,ContentContainer,PageHeader, ArrowLeft, FooterContainer } from './BaseScreenCss';

interface BaseScreenProps {
  header: string;
  children: React.ReactNode;
  showArrow?: boolean;  
  arrowRoute?: string;
}

interface ArrowLeftIconProps {
  visible: boolean;
  route?: string;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ visible, route }) => {
  const navigate = useNavigate();
  if (!visible) {
    return null; 
  }

  return (
    <div onClick={() => route && navigate(route)} style={{ cursor: 'pointer' }}>
    <ArrowLeft/>
    </div>
  );
};

const BaseScreen: React.FC <BaseScreenProps>= ({header, children,showArrow = false, arrowRoute}) => {
  return(
    <ScreenContainer>
      <ContainerFlex>
        <NavContainer>
          <ArrowLeftIcon visible={showArrow} route={arrowRoute}/>
          <PageHeader> {header} </PageHeader>
        </NavContainer>
          <ContentContainer>
            {children}  
          </ContentContainer>       
      </ContainerFlex>
      <FooterContainer> 
      <img src={RegisterIcon} style={{width:"45px", height: "45px"}} />
      <img src={DashboarIcon} style={{width:"60px", height: "38px"}} />
      <img src={AdminIcon } style={{width:"42px", height: "42px"}} />
      </FooterContainer>
    </ScreenContainer>
  );
}

export default BaseScreen;