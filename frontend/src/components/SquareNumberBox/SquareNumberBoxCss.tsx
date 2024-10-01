import styled from "styled-components";

export const SquareNumberBoxContainer = styled.div`
   border-radius: 10px;
   height: 90px;
   width: 150px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
   padding: 11px;
`

export const SquareBoxContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
export const BoxTitle = styled.h1`
   color: #005B64;
   font-size: 14px; 
   padding-bottom: 5px;
`;

export const Number = styled.p`
   color: #005B64; 
   font-size: 35px;
   font-weight: 700;
`;