import BouncyCheckbox from "react-native-bouncy-checkbox"
import { Container, TextDefault } from "../../styles/styled-components"

    const Settings =  () => {

        return (
            <Container> 
                <View>
                    <TextDefault> 
                        Deseja que suas playlist criada no app seja automaticamente vinculadas ao Spotify
                    </TextDefault>
                    <BouncyCheckbox />
                </View>
            </Container>
        )
    }

    export default Settings