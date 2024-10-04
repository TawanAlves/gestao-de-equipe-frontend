import styled from "styled-components";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineExclamation } from "react-icons/ai";

export const UserInfosTitle = styled.p`
  font-size: 15px;
  padding-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  padding: 50px 0 40px 0;
`;

export const HistoricParagraf = styled.p`
  font-size: 13px;
  text-align: left;
  padding-bottom: 1px;
`;

export const Check = styled(IoMdCheckmark)`
  /* align-self: flex-start; */
  color: #00838f !important;
  font-size: 15px;
  margin-right: 5px;
`;

export const Exclamation = styled(AiOutlineExclamation)`
  /* align-self: flex-start; */
  color: #ffa620 !important;
  font-size: 15px;
  padding-right: 3px;
`;
