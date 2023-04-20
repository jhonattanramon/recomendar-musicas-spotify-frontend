import { Pressable, View, Text, Button } from "react-native";
import Button_Component from "../../components/Button_Component";
import Input_Component from "../../components/Input_Component";
import {
  Container,
  SectionCenter,
  Title,
  Separador,
  NewText
} from "../../styles/styled-components";
import { colors } from "../../styles/colors";

const Bem_vindo = ({navigation}) => {
  return (
    <Container>
      <SectionCenter>
        <View>

          <View> 
            <NewText>Olá,</NewText>
          <Title>Bem-vindo</Title>
          </View>  
        
          <View>
            <Input_Component placeholderName="seu email" />
            <Separador />
            <Button_Component
            funcOnPress={ () => {
              navigation.navigate('login')
            }}
            title="continuar" />
          </View>
          <View>
            <Text  style={{ color: colors.complement.secondary }}>
              ainda não tem conta ? <Text
              onPress={ () => {
                navigation.navigate('cadastro')
            }}
              style={{color:colors.secondary}}>Cadastro</Text>
            </Text>
          </View>
        </View>
      </SectionCenter>
    </Container>
  );
};

export default Bem_vindo;
