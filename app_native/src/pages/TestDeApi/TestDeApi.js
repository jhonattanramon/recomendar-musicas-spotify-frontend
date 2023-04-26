import { View } from "react-native";
import { Button } from "react-native-paper";
import { Container } from "../../styles/styled-components";


const TesteDeApi = () => {

  function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }


const testeLink = () => {
  window.location.href = "http:/localhost:8888"
}

return(
  <Container> 

    <View>
      <Button onPress={() => {
        testeLink()
      }}>test</Button>
    </View> 

  </Container>
)

}
export default TesteDeApi;