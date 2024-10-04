import React from "react";
//css
import { DateInput, InputsContainer, Label } from "./DateInputCss";

interface DatePickerProps {
  title: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ title }) => {
  return (
    <InputsContainer>
      <Label htmlFor="date"> {title} </Label>
      <DateInput id="date" min="2024-01-01" max="2030-12-31" required />
    </InputsContainer>
  );
};

export default DatePicker;
