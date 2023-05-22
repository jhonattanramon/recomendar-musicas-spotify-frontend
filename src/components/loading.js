import {
  Container,
  TitleText,
  SectionCenter,
} from "../styles/styled-components";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../styles/colors";

const Loading = () => {
  return (
    <Container>
      <SectionCenter>
      <ActivityIndicator animating={true} color={colors.primary} />
      </SectionCenter>
    </Container>
  );
};
export default Loading;
