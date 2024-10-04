import React from "react";
//css
import { DashboardContent } from "../Dashboard/DashboardCss";
import { Number } from "@/components/SquareNumberBox/SquareNumberBoxCss";
import {
  Title,
  HistoricParagraf,
  Check,
  Exclamation,
} from "@/pages/User/UserCss";

//components
import RetangleBox from "@/components/RetangleBox/RetangleBox";
import BaseScreen from "@/components/Screen/BaseScreen";
import DatePicker from "@/components/DatePicker/DateInput";

const Dashboard: React.FC = () => {
  return (
    <BaseScreen header="Histórico">
      <div style={{ paddingTop: "22px" }}>
        <DatePicker title="Selecionar dia:" />
        <div style={{ minWidth: "340px", marginTop: "49px" }}>
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
