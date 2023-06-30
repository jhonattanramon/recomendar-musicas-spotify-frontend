import { Button, IconButton } from "react-native-paper";
import { colors } from "../styles/colors";
import { Pressable } from "react-native";

const ButtonIcon = ({
  icon,
  size = 27,
  color,
  onPress,
  style,
  disabled = false,
  theme,
  styleBackground
}) => {
  return (
    <Pressable 
    onPress={onPress}
    style={styleBackground}
    >
      <IconButton
        theme={theme}
        style={style}
        icon={`${icon}`}
        iconColor={color}
        size={size}
        animated={true}
        mode="none"
        disabled={disabled}
      />
    </Pressable>
  );
};
export default ButtonIcon;
