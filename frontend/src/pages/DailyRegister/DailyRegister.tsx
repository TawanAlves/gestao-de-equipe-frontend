import React, { useState } from "react";

//components
import BaseScreen from "@/components/Screen/BaseScreen";
import { SendButton } from "@/pages/Login/LoginCss";
import DatePicker from "@/components/DatePicker/DateInput";
import api from "@/services/api";

//css
import {
  DateContainer,
  NumberInput,
  CheckboxInput,
  Label,
  InputsContainer,
} from "./DailyRegisterCss";

const DailyRegister: React.FC = () => {
  const [date, setDate] = useState<string | null>("");
  const [quantity, setQuantity] = useState<number | null>(null);
  const [visit, setVisit] = useState<boolean>(false);
  const [receive, setReceive] = useState<boolean>(false);
  const [reading, setReading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      await api.post("/register", { date, quantity, visit, receive, reading });
      setDate(null);
      setQuantity(null);
      setVisit(false);
      setReceive(false);
      setReading(false);
      alert("Registro enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar registro");
    }
  };
  return (
    // Todo: criar toast que informa status de envio
    <BaseScreen header="Registro Diário">
      <DateContainer>
        <DatePicker
          title="Data:"
          value={date}
          onChange={(iso) => {
            setDate(iso);
          }}
        />
        <InputsContainer>
          <Label htmlFor="number">Quantidade:</Label>
          <NumberInput
            id="number"
            value={quantity ?? ""}
            onChange={(e) =>
              setQuantity(e.target.value === "" ? null : Number(e.target.value))
            }
          />
        </InputsContainer>
        <InputsContainer>
          <Label htmlFor="local">
            <CheckboxInput
              id="local"
              checked={visit}
              onChange={(e) => setVisit(e.target.checked)}
            />
            Foi ao local de aprimoramento
          </Label>
          <Label htmlFor="receive">
            <CheckboxInput
              id="receive"
              checked={receive}
              onChange={(e) => setReceive(e.target.checked)}
            />
            Recebeu a luz
          </Label>
          <Label htmlFor="reading">
            <CheckboxInput
              id="reading"
              checked={reading}
              onChange={(e) => setReading(e.target.checked)}
            />
            Leitura de ensinamento
          </Label>
          <InputsContainer></InputsContainer>
        </InputsContainer>

        <SendButton
          value="Resgistrar"
          style={{ marginTop: "60px", justifySelf: "center" }}
          onClick={handleSubmit}
        />
      </DateContainer>
    </BaseScreen>
  );
};

export default DailyRegister;
