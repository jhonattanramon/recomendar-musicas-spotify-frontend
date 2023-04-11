import { View } from "react-native"
import Button_Component from "../../components/Button_Component"
import Input_Component from "../../components/Input_Component"

import Container  from "./style"

const Login_Page = () => {
    
    return(
    
        <View style={Container}> 

            <View> 
                
                <Input_Component placeholder="EMAIL"/> 

                <Input_Component placeholder="SENHA"/>

            </View>

            <View> 
                
            <Button_Component title="login" /> 
            
            </View>

        </View>
    )
}



export default Login_Page