import styled, { css } from 'styled-components'
import { FaArrowLeft } from "react-icons/fa";

export const ScreenContainer = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   height: 100vh;
   max-width: 500px;
   justify-content: space-between;  
`

export const ContainerFlex = styled.div`
   padding: 26px 32px 40px;
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   height: 100vh;
   width: 100%;
   align-items: center;
   /* justify-content: space-between; */
   justify-content: center;
   color: #000;
`
export const NavContainer = styled.div`
   width: 100%;
   display: flex;
   /* justify-self: end !important; */
   justify-content: center;
   padding-bottom: 5px;
`
export const PageHeader = styled.h1`
   justify-self: center !important;
   flex-grow: 3;
   font-size: 25px;
   font-weight: 500;
`
export const ArrowLeft = styled(FaArrowLeft)`
   align-self: flex-start;
   color: #000000 !important;
   font-size: 25px;
`

export const ContentContainer = styled.div`
   display: flex;
   justify-self: end !important;
   /* background-color: #0cff4d; */
   flex-grow: 2;
   /* height: 100vh; */
`

export const FooterContainer = styled.div`
   background-color: #00838F;
   width: 100%;
   height: 64px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;

`