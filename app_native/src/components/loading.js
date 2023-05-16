import {
  Container,
  TitleText,
  SectionCenter,
} from "../styles/styled-components";
import { Text } from "react-native";

const Loading = () => {
  return (
    <Container>
      <SectionCenter>
        <TitleText>loading...</TitleText>
      </SectionCenter>
    </Container>
  );
};
export default Loading;
