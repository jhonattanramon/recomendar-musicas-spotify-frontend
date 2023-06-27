import { View, Text, StyleSheet, Modal} from "react-native";
import { TitleText } from "../styles/styled-components";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { colors } from "../styles/colors";
import ButtonIcon from "./ButtonIcon";


const InforComponent = ({inforUser, visibiliteInfor}) => {
    console.log(inforUser);
    console.log(visibiliteInfor);
    const [visibleModal, setVisibleModal] = useState(false)

    useEffect( ()=> {
     setVisibleModal(visibiliteInfor)
    },[visibiliteInfor])

    if( inforUser !== {} ){
        return (
        <Modal
        style={{
            height: 400,
            width: 500
        }}
          visible={visibleModal}
          transparent={true}
          onDismiss={() => setVisibleModal(false)}
          contentContainerStyle={{
            backgroundColor: "",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            overflow: "scroll",
          }}
        >
        <View style={{ 
            marginVertical: '25%',
            width: "100%",
            justifyContent:"center",
            alignItems: "center",
            backgroundColor: colors.complement.secondary
        }}>
            <ButtonIcon
             icon={"close"}
              style={{
                position:"absolute",
                top: "1%",
                right: "2%"
              }}
              onFunc={ () => setVisibleModal(false)}
              /> 
        <TitleText style={{ color: "black" }}>Informações Spotify</TitleText>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Nome:</Text>
            <Text>{inforUser?.display_name}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Id:</Text>
            <Text>{inforUser?.id}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Email:</Text>
            <Text>{inforUser?.email}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Assinatura:</Text>
            <Text>{inforUser?.product}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.fontBold}>Link:</Text>
            <Text
              onPress={() => {
                  Linking.openURL(`${inforUser?.external_urls?.spotify}`);
                }}
                style={{ textDecorationLine: "underline" }}
                >
              {inforUser?.external_urls?.spotify}
            </Text>
          </View>
        </View>
        </Modal>
    );
}else{
    <Modal
    visible={visibleModal}
    //onDismiss={() => setVisibleModal(false)}
    contentContainerStyle={{
      backgroundColor: "white",
      alignItems: "center",
      width: "100%",
      height: 300,
      zIndex: 1,
      overflow: "scroll",
    }}
    > 

    <View> 
      <Loading />  
    </View>
    </Modal>
}
  };

  
const styles = StyleSheet.create({
    SectionsDeDadosApp: {
      flex: 1,
      alignItems: "center",
    },
    fontBold: {
      fontWeight: "bold",
    },
    line: {
      flexDirection: "row",
      gap: 2,
    },
  });
  export default InforComponent