import { Button, IconButton } from "react-native-paper";
import { colors } from "../styles/colors";

const ButtonIcon = ({ title, icon, size, color, onFunc, style }) => {
  return (
    <IconButton
      style={style}
      icon={`${icon}`}
      iconColor={color}
      size={size}
      animated={true}
      mode="none"
      onPress={onFunc}
    />
  );
};
export default ButtonIcon;
