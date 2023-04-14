import { View, Text } from "react-native" 
import Button_Component from "../../components/Button_Component"
import Input_Component from "../../components/Input_Component"

import {Separador, Container, SectionCenter}  from "../../styles/styled-components"

 

const Login_Page = () => {
    
    return(
    
        <Container> 

            <SectionCenter> 


            <View> 
                
                
                <Input_Component placeholderName="Email"  color={"#00000"}/> 

                <Input_Component placeholderName="Senha"  color={"#00000"}/>

            </View>

            <Separador />

            <View> 
                
                <Button_Component title="login" /> 
            
            </View>

            </SectionCenter>
            
        </Container>
    )
}





export default Login_Page