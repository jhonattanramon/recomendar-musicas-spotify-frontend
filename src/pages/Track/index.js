import { useEffect } from "react";
import { View, Text } from "react-native";
import { Requisicoes } from "../../services/requisições/req";

const TrackPage =  ({route, navigation}) => {


  console.log(route);
  const requisicoes =  new Requisicoes();


  useEffect(() =>{
      const load = async () => {

       const inforTrack = await requisicoes.track(route.params.url)
        console.log(inforTrack);
      }

      load()
  },[])

  

  return (
    <View>
      <Text>track</Text>
    </View>
  );
};

export default TrackPage;
