import { Icon } from "react-native-elements";

export function ButtonIcon({type, icon, color, size}) {
  return <Icon 
  color={color}
  name={icon}
  type={type} 
  size={size}
  />;
}
