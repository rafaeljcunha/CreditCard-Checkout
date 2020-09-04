import React, { useContext } from "react";
import { Card, Form, Row, Col } from "antd";
import { CardContext } from "../../context";
import { styles } from "./styles";
import CustomRenderInput from "../FormInputs/index";

export default function CardForm() {
  const { setCardBehind, handleCardInformations } = useContext(CardContext);

  return (
    <Card bordered={false} style={styles.cardStyles}>
      <Form>
        <Row gutter={24} justify="space-between" align="middle">
          <Col lg={16} md={16}>
            <CustomRenderInput
              label="Número do cartão"
              type="cardNumber"
              onFocus={() => setCardBehind(false)}
              onChange={({ target: { value } }) =>
                handleCardInformations({ value, fieldName: "cardNumber" })
              }
            />
          </Col>
          <Col lg={8} md={8}>
            <CustomRenderInput
              label="CVV"
              type="cvv"
              onFocus={() => setCardBehind(true)}
              onChange={(value) =>
                handleCardInformations({ value, fieldName: "cvv" })
              }
            />
          </Col>
          <Col lg={10} md={10}>
            <CustomRenderInput
              label="Criação"
              type="datepicker"
              onFocus={() => setCardBehind(false)}
              onChange={(_, value) =>
                handleCardInformations({ value, fieldName: "since" })
              }
            />
          </Col>
          <Col lg={10} md={10}>
            <CustomRenderInput
              label="Validade"
              type="datepicker"
              onFocus={() => setCardBehind(false)}
              onChange={(_, value) =>
                handleCardInformations({ value, fieldName: "validate" })
              }
            />
          </Col>
          <Col span={24}>
            <CustomRenderInput
              label="Nome do titular"
              onFocus={() => setCardBehind(false)}
              onChange={({ target: { value } }) =>
                handleCardInformations({ value, fieldName: "name" })
              }
            />
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
