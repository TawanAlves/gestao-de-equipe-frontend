import styled, { css } from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

export const ScreenContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  /* height: 90vh; */
  /* overflow: none; */
  /* justify-content: space-between; */
`;

export const ContainerFlex = styled.div`
  padding: 26px 32px 5px;
  /* padding: 0px 32px; */
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #000;
`;
export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-self: end !important; */
  justify-content: center;
  /* padding-bottom: 5px; */
`;
export const PageHeader = styled.h1`
  justify-self: center !important;
  flex-grow: 3;
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 5px;
`;
export const ArrowLeft = styled(FaArrowLeft)`
  align-self: flex-start;
  color: #000000 !important;
  font-size: 25px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-self: end !important;
  /* background-color: #0cff4d; */
  flex-grow: 2;
  /* height: 100vh; */
  min-width: 340px;
  flex-direction: column;
  /* justify-content: space-evenly; */
`;

export const FooterContainer = styled.div`
  background-color: #00838f;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
