import React from "react";

//components
import BaseScreen from "@/components/Screen/BaseScreen";
import { SendButton } from "@/pages/Login/LoginCss";
import DatePicker from "@/components/DatePicker/DateInput";

//css
import {
  DateContainer,
  NumberInput,
  CheckboxInput,
  Label,
  InputsContainer,
} from "./DailyRegisterCss";

const DailyRegister: React.FC = () => {
  return (
    <BaseScreen header="Registro Diário">
      <DateContainer>
        <DatePicker title="Data:" />
        <InputsContainer>
          <Label htmlFor="number">Quantidade:</Label>
          <NumberInput id="number" />
        </InputsContainer>
        <InputsContainer>
          <Label htmlFor="local">
            <CheckboxInput id="local" />
            Foi ao local de aprimoramento
          </Label>
          <Label htmlFor="local">
            <CheckboxInput id="local" />
            Recebeu a luz
          </Label>
          <Label htmlFor="local">
            <CheckboxInput id="local" />
            Leitura de ensinamento
          </Label>
          <InputsContainer></InputsContainer>
        </InputsContainer>

        <SendButton value="Resgistrar" style={{ marginTop: "60px" }} />
      </DateContainer>
    </BaseScreen>
  );
};

export default DailyRegister;
