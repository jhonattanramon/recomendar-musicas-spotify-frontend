import { Button, IconButton } from "react-native-paper";
import { colors } from "../styles/colors";

const ButtonIcon = ({ title, icon, size, color, onFunc, styleComp }) => {
  return (
    <IconButton
      style={styleComp}
      icon={`${icon}`}
      iconColor={color}
      size={size}
      animated={true}
      mode="none"
      onPress={onFunc}
    >
      {title}
    </IconButton>
  );
};
export default ButtonIcon;
