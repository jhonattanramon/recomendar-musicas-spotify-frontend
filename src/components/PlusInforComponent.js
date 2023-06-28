import { IconButton } from "react-native-paper"
import { colors } from "../styles/colors";


const PlusInfor = ({ funcOnPress, size }) => {
  return (
    <IconButton
      iconColor={colors.primary}
      icon="plus"
      onPress={funcOnPress}
      size={size}
    />
  );
};
export default PlusInfor