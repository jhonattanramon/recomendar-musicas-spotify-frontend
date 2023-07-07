import { Image } from "react-native"
export function AvartarImage({width=150, height=150, uri = "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"}){
    return(
       <Image 
       style={{  
        width: width,
        height: height,
        borderRadius: 100,
        
       }}
       source={{
        uri: uri == undefined ? "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" : uri
       }}
       resizeMode="cover"
       />
    )
}

