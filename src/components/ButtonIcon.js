import { Button, IconButton } from "react-native-paper";
import { colors } from "../styles/colors";

const ButtonIcon = ({ title, icon, size, color, onFunc, style, disabled = false, theme }) => {
  return (
    <IconButton
      theme={theme}
      style={style}
      icon={`${icon}`}
      iconColor={color}
      size={size}
      animated={true}
      mode="none"
      onPress={onFunc}
      disabled={disabled}
    />
  );
};
export default ButtonIcon;
