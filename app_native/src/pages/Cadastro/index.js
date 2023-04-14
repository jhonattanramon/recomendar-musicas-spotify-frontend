import { View, Text } from "react-native"
import { Container, Section, SectionCenter, Separador } from "../../styles/styled-components"
import { TextInput } from "react-native-paper"
import Button_Component from "../../components/Button_Component"
import Input_Component from "../../components/Input_Component"


const Cadastro_page = () => {


  return(

    <Container> 

    <SectionCenter> 


    <Section> 
 
      <View> 
          <Input_Component labelName="Nome" /> 

          <Input_Component labelName="Sobrenome" /> 
      </View>

      <View> 
        <Input_Component labelName="Email"/> 
      </View>

      <View> 
        <Input_Component labelName="Senha"/> 
      </View>
      
    </Section>  

      <Separador /> 

    <Section> 

      <View> 
      <Button_Component title='Realizar Cadastro' /> 
      </View>
    </Section>


    </SectionCenter>

    </Container>


  )
} 

export default Cadastro_page