import { View, Text } from "react-native"
import { ViewImageTrack } from "../styles/styled-components"
import ImagemComponent from "./Imagem"
import { colors  } from "../styles/colors"

const Track = ({ titulo, album, artista, tempoDeReproducao}) => {
  return(
    <View style={ { backgroundColor:colors.blur.primary, padding:5, borderRadius:3} }> 
      <View style={{flexDirection:'row', alignItems:'center'}}>

      <View style={{ flex: 1}}>
        <ViewImageTrack> 
          <ImagemComponent /> 
        </ViewImageTrack>
      </View>

        <View style={{flex:1}}> 
          <Text style={{color: colors.complement.secondary, fontWeight: "bold"}}> 
            {titulo}
          </Text>
        </View>

        <View style={{flex:1}}> 
          <Text  style={{color: colors.complement.secondary}}> 
            {album}
          </Text>
        </View>

        <View style={{flex:1}}> 
          <Text  style={{color: colors.complement.secondary}}> 
             {artista}
          </Text> 
        </View>

        <View style={{flex:1}}> 
          <Text style={{color: colors.complement.secondary}}> 
            {tempoDeReproducao}
          </Text>
        </View>
      </View>
    </View>
  )
} 

export default Track