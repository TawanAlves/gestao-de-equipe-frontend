import styled from "styled-components";

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  color: #000;
  border: 2px solid #00838f;
  border-radius: 10px;
  min-width: 300px;
  height: 50px;
  padding: 10px;
`;

export const Label = styled.label`
  text-align: left;
  color: #005b64;
  padding-bottom: 8px;
`;
