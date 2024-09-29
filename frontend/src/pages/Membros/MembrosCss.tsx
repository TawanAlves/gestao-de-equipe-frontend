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
export const ArrowRightIcon = styled(MdKeyboardArrowRight)`
   color: #000000 !important;
   font-size: 25px;
`

export const Name = styled.p`
   color: #005B64;
   font-weight: bold;
   font-size: 15px;
   text-align: left;
`

export const SubName = styled.p`
   color: #005B64;
   font-size: 15px;
`