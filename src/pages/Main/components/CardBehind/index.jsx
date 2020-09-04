import React, { useContext } from "react";
import { Card } from "antd";
import { CardContext } from "../../context";
import { ContactCenter } from "../../../../utils/messages";
import {
  styles,
  Text,
  TextSignature,
  CardBody,
  CardBodyContent,
  WhiteBar,
  WhiteSquareCvv,
} from "./styles";

export default function CardBehind() {
  const { cvv } = useContext(CardContext);
  return (
    <Card hoverable bordered={false} style={styles.cardStyles}>
      <Text fontSize="8px">{ContactCenter}</Text>
      <CardBody>
        <Text fontSize="10px">Assinatura Autorizada</Text>
        <CardBodyContent>
          <WhiteBar />
          <WhiteSquareCvv>
            <TextSignature>{cvv}</TextSignature>
          </WhiteSquareCvv>
        </CardBodyContent>
      </CardBody>
    </Card>
  );
}
