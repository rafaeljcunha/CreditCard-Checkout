import React, { useState } from "react";
import CardFront from "./components/CardFront/index";
import CardBehind from "./components/CardBehind/index";
import CardForm from "./components/CardForm/index";
import { Container, CardContainer } from "./styles";
import { CardContext } from "./context";
import "./index.css";

export default function Main() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [since, setSince] = useState("00/0000");
  const [validate, setValidate] = useState("00/0000");
  const [personName, setPersonName] = useState("NOME DO TITULAR");
  const [cvv, setCvv] = useState("");
  const [cardBehind, setCardBehind] = useState("");

  const handleCardInformations = ({ value, fieldName }) => {
    switch (fieldName) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      case "since":
        setSince(value);
        break;
      case "validate":
        setValidate(value);
        break;
      case "name":
        setPersonName(value.toUpperCase());
        break;
      default:
        break;
    }
  };

  const contextProps = {
    cardNumber,
    since,
    validate,
    personName,
    cvv,
    setCardBehind,
    handleCardInformations,
  };

  return (
    <CardContext.Provider value={contextProps}>
      <Container>
        {!cardBehind ? (
          <CardContainer className="class-front">
            <CardFront />
          </CardContainer>
        ) : (
          <CardContainer className="class-cvv">
            <CardBehind />
          </CardContainer>
        )}
        <CardForm />
      </Container>
    </CardContext.Provider>
  );
}
