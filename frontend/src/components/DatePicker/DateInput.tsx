import React from "react";
//css
import { DateInput, InputsContainer, Label } from "./DateInputCss";

interface DatePickerProps {
  title: string;
  value: string | null;
  onChange: (value: string, formatted: string) => void;
}

const formatDate = (isoDate: string) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};

const DatePicker: React.FC<DatePickerProps> = ({ title, value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const formatted = formatDate(val);
    onChange(val, formatted);
  };
  // TODO: melhorar date picker para mostrar dd/mm/yyyy

  return (
    <InputsContainer>
      <Label htmlFor="date"> {title} </Label>
      <DateInput
        id="date"
        min="2024-01-01"
        max="2030-12-31"
        required
        value={value ?? ""}
        onChange={handleInputChange}
        placeholder="Selecione uma data"
        maxLength={10}
      />

      <span
        style={{
          height: "30px",
          left: "10px",
          margin: "3px",
          display: "block",
          color: "#555",
          backgroundColor: "white",
        }}
      >
        {formatDate(value ?? "")}
      </span>
    </InputsContainer>
  );
};

export default DatePicker;
