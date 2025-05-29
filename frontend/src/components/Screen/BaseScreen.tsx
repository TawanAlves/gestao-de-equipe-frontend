import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//components
import RegisterIcon from "../../assets/registerIcon.svg";
import AdminIcon from "../../assets/adminIcon.svg";
import DashboarIcon from "../../assets/dashboarIcon.svg";

//css
import {
  ScreenContainer,
  ContainerFlex,
  NavContainer,
  ContentContainer,
  PageHeader,
  ArrowLeft,
  FooterContainer,
} from "./BaseScreenCss";

interface BaseScreenProps {
  header: string;
  children: React.ReactNode;
  showArrow?: boolean;
  arrowRoute?: string;
  route?: string;
}

interface ArrowLeftIconProps {
  visible: boolean;
  route?: string;
  onClick?: () => void;
}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({ visible, onClick }) => {
  if (!visible) {
    return null;
  }

  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <ArrowLeft />
    </div>
  );
};

const BaseScreen: React.FC<BaseScreenProps> = ({
  header,
  children,
  showArrow = false,
  arrowRoute,
  route,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (route) {
      navigate(route);
    }
  };
  return (
    <ScreenContainer>
      <ContainerFlex>
        <NavContainer>
          <ArrowLeftIcon visible={showArrow} onClick={handleNavigation} />
          <PageHeader> {header} </PageHeader>
        </NavContainer>
        <ContentContainer>{children}</ContentContainer>
      </ContainerFlex>
      <FooterContainer>
        <Link to="/dailyregister">
          <img
            src={RegisterIcon}
            alt="Registrar"
            style={{ width: "45px", height: "45px" }}
          />
        </Link>
        <Link to="/dashboard">
          <img src={DashboarIcon} style={{ width: "60px", height: "38px" }} />
        </Link>
        <Link to="/membros">
          <img src={AdminIcon} style={{ width: "42px", height: "42px" }} />
        </Link>
      </FooterContainer>
    </ScreenContainer>
  );
};

export default BaseScreen;
