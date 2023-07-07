import { Pressable } from "react-native";
import { Icon } from "react-native-elements";


export function ButtonIcon({type = "ionicon", icon, color, size, onPress, style}) {
  return <Pressable style={{padding:7}} children={Icon} onPress={onPress}> 
    <Icon 
    color={color}
    name={icon}
    type={type} 
    size={size}
    style={style}
    />

  </Pressable>
  
}
