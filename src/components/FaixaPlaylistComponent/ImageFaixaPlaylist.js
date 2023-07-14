import { Image } from "react-native";
export function ImageFaixaPlaylist({uri}){
    return <Image style={{width:60, height:60}} source={{uri: uri}}/>
}