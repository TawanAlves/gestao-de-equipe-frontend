import React from "react";
//css
import { DashboardContent } from "../Dashboard/DashboardCss";
import { Number } from "@/components/SquareNumberBox/SquareNumberBoxCss";
import {
  UserInfosTitle,
  Title,
  HistoricParagraf,
  Check,
  Exclamation,
} from "./UserCss";

//components
import RetangleBox from "@/components/RetangleBox/RetangleBox";
import BaseScreen from "@/components/Screen/BaseScreen";
import SquareBox from "@/components/SquareBox/SquareBox";

const Dashboard: React.FC = () => {
  return (
    <BaseScreen header="Henrique Serra" showArrow={true}>
      <div>
        <UserInfosTitle>Oficial - 24 anos</UserInfosTitle>
        <div style={{ minWidth: "340px" }}>
          <DashboardContent>
            <SquareBox title="Total Mês Atual" aplicou={10} recebeu={10} />
            <SquareBox title="Total Mês Passado" aplicou={10} recebeu={10} />
          </DashboardContent>
          <DashboardContent>
            <SquareBox title="Últimos 6 meses" aplicou={10} recebeu={10} />
            <SquareBox title="Geral" aplicou={10} recebeu={10} />
          </DashboardContent>
          <Title>Histórico</Title>
          <RetangleBox style={{ margin: "0 0 20px 0" }}>
            <div></div>
            <div>
              <div style={{ display: "flex" }}>
                <Check /> <HistoricParagraf>Recebeu a Luz</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Check /> <HistoricParagraf>Leu Ensinamento</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Check />
                <HistoricParagraf>
                  Foi ao local de aprimoramento
                </HistoricParagraf>
              </div>
            </div>
            <div style={{ marginRight: "5px" }}>
              <Number>10</Number>
            </div>
          </RetangleBox>
          <RetangleBox style={{ margin: "0 0 20px 0" }}>
            <div></div>
            <div>
              <div style={{ display: "flex" }}>
                <Check /> <HistoricParagraf>Recebeu a Luz</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Exclamation />
                <HistoricParagraf>Leu Ensinamento</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Check />
                <HistoricParagraf>
                  Foi ao local de aprimoramento
                </HistoricParagraf>
              </div>
            </div>
            <div style={{ marginRight: "5px" }}>
              <Number>10</Number>
            </div>
          </RetangleBox>
          <RetangleBox style={{ margin: "0 0 20px 0" }}>
            <div></div>
            <div>
              <div style={{ display: "flex" }}>
                <Exclamation />
                <HistoricParagraf>Recebeu a Luz</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Exclamation />
                <HistoricParagraf>Leu Ensinamento</HistoricParagraf>
              </div>
              <div style={{ display: "flex" }}>
                <Exclamation />
                <HistoricParagraf>
                  Foi ao local de aprimoramento
                </HistoricParagraf>
              </div>
            </div>
            <div style={{ marginRight: "5px" }}>
              <Number>10</Number>
            </div>
          </RetangleBox>
        </div>
      </div>
    </BaseScreen>
  );
};

export default Dashboard;
