import styled, { css } from 'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md";

export const ContentContainer = styled.div`
padding-top: 38px;
`
export const TextInput = styled.input.attrs({type:"text"})`
   color: black;
   font-family: 'Roboto', sans-serif;
   font-size: 15px; 
   width: 300px; 
   border: 2px solid #00838F !important;
   margin-bottom: 20px;
   border-radius: 5px;
   padding: 11px;
`

export const LeftBoxContainer = styled.div`
   /* background-color: #a1c7a6; */
   background-color: #00838F;
   height: 54px;
   width: 54px;
   border-radius: 100%;   
`
export const MiddleBoxContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex-grow: 2;
   padding-left: 7px
   ;
`
export const RigthBoxContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-right: 5px;
`
export const ArrowRightIcon = styled(MdKeyboardArrowRight)`
   color: #000000 !important;
   font-size: 25px;
`

export const Name = styled.p`
   font-weight: bold;
   font-size: 15px;
   text-align: left;
`

export const SubName = styled.p`
   font-size: 15px;
`