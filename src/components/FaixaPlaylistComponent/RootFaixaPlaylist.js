import { Pressable } from "react-native";
export function RootFaixaPlaylist({children, onPress, style}){
    return <Pressable onPress={onPress} style={style}>{children}</Pressable>
}