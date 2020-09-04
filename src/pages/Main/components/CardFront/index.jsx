import React, { useContext } from "react";
import { Card } from "antd";
import { CreditCardFilled, BoxPlotFilled } from "@ant-design/icons";
import visa from "../../../../assets/visa.png";
import { CardContext } from "../../context";
import {
  styles,
  CardTitleContent,
  CardLogoContainer,
  BankTitle,
  BlackTitle,
  CardBody,
  ChipAndTypeContainer,
  TypeText,
  CardNumberText,
  SinceAndValidateContainer,
  SinceContent,
  ValidateContent,
  TextDefault,
  CardholderNameContainer,
  HolderName,
  VisaImage,
} from "./styles";

export default function CardFront() {
  const { cardNumber, since, validate, personName } = useContext(CardContext);

  return (
    <Card
      hoverable
      bordered={false}
      style={styles.cardStyles}
      title={
        <CardTitleContent>
          <CardLogoContainer>
            <CreditCardFilled style={{ fontSize: 24, color: "#fff" }} />
            <BankTitle>DevBank</BankTitle>
          </CardLogoContainer>
          <BlackTitle>BLACK</BlackTitle>
        </CardTitleContent>
      }
    >
      <CardBody>
        <ChipAndTypeContainer>
          <BoxPlotFilled style={{ fontSize: 50, color: "#fff" }} />
          <TypeText>International</TypeText>
        </ChipAndTypeContainer>
        <CardNumberText>{cardNumber}</CardNumberText>
        <SinceAndValidateContainer>
          <SinceContent>
            <TextDefault>Criação</TextDefault>
            <TextDefault>{since}</TextDefault>
          </SinceContent>
          <ValidateContent>
            <TextDefault>Validade</TextDefault>
            <TextDefault>{validate}</TextDefault>
          </ValidateContent>
        </SinceAndValidateContainer>
        <CardholderNameContainer>
          <HolderName>{personName}</HolderName>
          <VisaImage src={visa} width="60" height="40" alt="visa" />
        </CardholderNameContainer>
      </CardBody>
    </Card>
  );
}
