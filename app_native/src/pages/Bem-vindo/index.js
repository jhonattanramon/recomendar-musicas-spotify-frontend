import { Pressable, View,Text, Button } from "react-native"
import Button_Component from "../../components/Button_Component"
import Input_Component from "../../components/Input_Component"
import { Container, SectionCenter, Title } from "../../styles/styled-components"
import { colors } from "../../styles/colors"



const Bem_vindo = () => {

  return(

    <Container> 

      <SectionCenter> 

          <View> 

          <Input_Component />
          <Button_Component 
          title="continuar"
          /> 

        <View> 
          <Text style={{color:colors.complement.secondary}}>ainda não tem conta ? </Text> 
          
        </View>

          </View>

      </SectionCenter>


    </Container>

  )


  


}

export default Bem_vindo