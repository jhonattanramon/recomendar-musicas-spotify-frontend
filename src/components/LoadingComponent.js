import * as Styled from "../styles/styled-components";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../styles/colors";

const Loading = () => {
  return (
    <Styled.Container>
      <Styled.SectionCenter>
      <ActivityIndicator animating={true} color={colors.primary} />
      </Styled.SectionCenter>
    </Styled.Container>
  );
};
export default Loading;
