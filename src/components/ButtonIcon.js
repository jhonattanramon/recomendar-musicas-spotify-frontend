import { Button, IconButton } from "react-native-paper";
import { colors } from "../styles/colors";

const ButtonIcon = ({ title, icon, size }) => {
  return (
    <IconButton
      style={{}}
      icon={`${icon}`}
      iconColor={colors.primary}
      size={size}
      animated={true}
      mode="none"
    >
      {title}
    </IconButton>
  );
};
export default ButtonIcon;
