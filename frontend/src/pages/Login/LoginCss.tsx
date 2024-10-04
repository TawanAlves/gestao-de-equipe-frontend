import styled, { css } from 'styled-components'

export const ContainerFlex = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   height: 100vh;
   align-items: center;
   justify-content: center;
`
export const TextInput = styled.input.attrs({type:"text"})`
   color: black;
   font-size: 15px; 
   width: 300px; 
   border: 2px solid #00838F !important;
   margin-bottom: 20px;
   border-radius: 5px;
   padding: 11px;
`
export const PasswordInput = styled.input.attrs({type:"password"})`
   color: black;
   font-size: 15px; 
   width: 300px; 
   border: 2px solid #00838F !important;
   margin-bottom: 20px;
   border-radius: 5px;
   padding: 11px;
`
export const SendButton = styled.input.attrs({type:"button"})`
   color: black; 
   width: 300px; 
   border: 2px solid #00838F !important;
   background: #00838F; 
   color: white;
   margin-bottom: 20px;
   border-radius: 5px;
   padding: 11px;
   font-size: 15px;
`