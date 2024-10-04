import styled from "styled-components";

export const RetangleBoxContainer = styled.div`
  border-radius: 100px 30px 30px 100px;
  /* border-radius: 10px; */
  height: 70px;
  width: 340px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
`;
export const LeftBoxContainer = styled.div`
  /* background-color: #a1c7a6; */
  background-color: #00838f !important;
  height: 70px;
  width: 70px;
  border-radius: 100%;
`;
export const MiddleBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  padding-left: 7px;
`;
export const RigthBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
`;
