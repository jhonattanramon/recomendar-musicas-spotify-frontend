import styled from "styled-components/native";
import { colors } from "./colors";


export const Container = styled.View`
  flex: 1;
  background: ${colors.complement.primary};
  
`
export const ScrollContainer = styled.ScrollView`
flex: 1;
`

export const SeparadorVertical = styled.View`
  margin: 10px 0;
`;

export const SeperadorHorizontal = styled.View`
  margin: 0 10px;
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

  flex: 1;
`;

export const Card = styled.View`
  width: 230px;
  height: 300px;
`;

//Fonts
export const TitleText = styled.Text`
  font-size: 27;
  font-weight: bold;
  color: ${colors.complement.secondary};
`;

export const NewText = styled.Text`
  font-size: 15;
  font-weight: bold;
  color: ${colors.tertiary};
`;

export const SubText = styled.Text`
  font-size: 13;
  color: ${colors.complement.tertiary};
`;

export const ViewImageTrack = styled.View`
    width:70;
    height:70;

    
`
export const TextDefault = styled.Text`
  color: ${colors.complement.secondary};
`;