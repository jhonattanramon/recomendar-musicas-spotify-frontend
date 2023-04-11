import { View } from "react-native"
import Button_Component from "../../components/Button_Component"
import Input_Component from "../../components/Input_Component"

import {Separador, Container}  from "./style.js"

 

const Login_Page = () => {
    
    return(
    
        <Container> 

            <View> 
                
                
                <Input_Component placeholder="EMAIL"/> 

                <Input_Component placeholder="SENHA"/>

            </View>

            <Separador />

            <View> 
                
                <Button_Component title="login" /> 
            
            </View>

        </Container>
    )
}





export default Login_Page