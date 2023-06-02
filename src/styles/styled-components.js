import styled from "styled-components/native";
import { colors } from "./colors";
import { Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { Dimension } from "../components/Dimension";

// const windowDimensions = Dimensions.get("window");
// const screenDimensions = Dimensions.get("screen");

// const [dimensions, setDimensions] = useState({
//   window: windowDimensions,
//   screen: screenDimensions,
// });

// useEffect(() => {
//   const subscription = Dimensions.addEventListener(
//     "change",
//     ({ window, screen }) => {
//       setDimensions({ window, screen });
//     }
//   );
//   return () => subscription?.remove();
// }),
//   [Container];

//Scopes
// export const ContainerTeste = styled.View`
//   width: ${};
//   height: ${};
// `

export const Container = styled.View`
  flex: 1;
  background: ${colors.complement.primary};
  overflow: hidden;
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

export const Header = styled.View`
  position: absolute;
  top: 5%;
`;

export const Avatar = styled.View`
  background: ${colors.secondary};
  border-radius: 50%;
  width: 120px;
  height: 120px;

  text: {
    font-weight: bold;
    font-size: 10;
    color: ${colors.complement.secondary};
    position: relative;
    top: 50%;
    left: 50%;
  }
`;

export const Square = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  flex: 1;
`;

export const Card = styled.View`
  width: 230px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blur.primary};
`;

//Fonts
export const TitleText = styled.Text`
  font-size: 37;
  font-weight: bold;
  color: ${colors.complement.secondary};
`;

export const NewText = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${colors.tertiary};
`;

export const SubText = styled.Text`
  font-size: 25;
  font-weight: bold;
  color: ${colors.complement.secondary};
`;

export const ViewImageTrack = styled.View`
    width:70;
    height:70;

    
`
export const TextDefault = styled.Text`
  color: ${colors.complement.secondary};
`;