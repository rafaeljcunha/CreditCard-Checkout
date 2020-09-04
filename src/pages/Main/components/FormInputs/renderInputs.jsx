import React from "react";
import { Input, InputNumber, DatePicker } from "antd";

export default function InputRenderType({ type, onFocus, onChange }) {
  switch (type) {
    case "cardNumber":
      return (
        <Input
          onFocus={onFocus}
          onChange={onChange}
          placeholder="0000 0000 0000 0000"
          maxLength={19}
        />
      );
    case "cvv":
      return (
        <InputNumber
          onFocus={onFocus}
          onChange={onChange}
          placeholder="000"
          min={0}
          max={999}
          maxLength={3}
          style={{ width: "100%" }}
        />
      );
    case "datepicker":
      return (
        <DatePicker
          picker="month"
          format="MM/YYYY"
          placeholder="MM/YYYY"
          onFocus={onFocus}
          onChange={onChange}
        />
      );
    default:
      return (
        <Input
          onFocus={onFocus}
          onChange={onChange}
          maxLength={19}
          placeholder="Ex.: JOÃO DE OLIVEIRA"
        />
      );
  }
}
