import React from "react";
import { Form } from "antd";
import InputRenderType from "./renderInputs";
import { Title } from "./styles";

export default function InputType({ onFocus, onChange, type, label }) {
  return (
    <Form.Item
      label={<Title>{label}</Title>}
      colon={false}
      labelCol={{ span: 24 }}
    >
      <InputRenderType onFocus={onFocus} onChange={onChange} type={type} />
    </Form.Item>
  );
}
