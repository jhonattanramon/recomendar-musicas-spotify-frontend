import styled from "styled-components/native";
import { colors } from "./colors";

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background: ${colors.complement.primary};
`;

export const Separador = styled.View`
  margin: 10px 0;
`;

export const Section = styled.View``;

export const SectionCenter = styled.View`
  flex: 1;
  width: 70%;
  justify-content: center;
  margin: 0 auto;
`;
export const HeaderStyle = styled.View`
  background: #222;
`;

export const TitleText = styled.Text`
  font-size: 37;
  font-weight: bold;
  color: ${colors.complement.secondary}

`;

export const NewText = styled.Text` 
  font-size: 15;
  font-weight: bold;
  color: ${colors.tertiary};
`;

export const Header = styled.View`
position:absolute;
top: 5%




`