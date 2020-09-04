import styled from "styled-components";
import background from "../../../../assets/background-black.jpg";

export const Text = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
`;

export const TextSignature = styled.span`
  color: #000000;
  font-weight: 700;
  font-style: italic;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  min-height: 245px;
`;

export const CardBodyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBar = styled.div`
  width: 330px;
  height: 40px;
  background: #ffffff;
  margin-right: 20px;
`;

export const WhiteSquareCvv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 40px;
  background: #ffffff;
  margin-right: 20px;
`;

export const styles = {
  cardStyles: {
    width: 450,
    height: 295,
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "5px",
  },
};
