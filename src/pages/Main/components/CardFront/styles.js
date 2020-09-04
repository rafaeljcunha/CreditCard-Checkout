import styled from "styled-components";
import background from "../../../../assets/background-black.jpg";

export const CardTitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CardLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BankTitle = styled.div`
  margin-left: 10px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const BlackTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ChipAndTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TypeText = styled.h3`
  color: #ffffff;
`;

export const CardNumberText = styled.h1`
  color: #ffffff;
  margin-bottom: 0.2em;
`;

export const SinceAndValidateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const SinceContent = styled.div``;

export const ValidateContent = styled.div`
  margin-left: 100px;
`;

export const TextDefault = styled.p`
  color: #ffffff;
  margin-bottom: 0px;
`;

export const CardholderNameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 0.6em;
`;

export const HolderName = styled.h2`
  color: #ffffff;
`;

export const VisaImage = styled.img``;

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
