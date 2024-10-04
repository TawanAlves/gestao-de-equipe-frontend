import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 21px;
  padding-top: 55px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumberInput = styled.input.attrs({ type: "number" })`
  color: #000;
  border: 2px solid #00838f;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  padding: 10px;
`;

export const CheckboxInput = styled.input.attrs({ type: "checkbox" })`
  color: #00838f;
  border: 3px solid #00838f;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #00838f;
`;

export const Label = styled.label`
  text-align: left;
  color: #005b64;
  padding-bottom: 8px;
`;
