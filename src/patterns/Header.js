import { View } from "react-native";
import { Section } from "../styles/styled-components";
import ButtonIcon from "../components/ButtonIcon";
import { colors } from "../styles/colors";

const Header = ({ navigation }) => {
  return (
    <Section style={{ margin: 10 }}>
      <View>
        <ButtonIcon
          onFunc={() => navigation.goBack()}
          icon="arrow-left"
          color={colors.complement.secondary}
        />
      </View>
    </Section>
  );
};
export default Header;
