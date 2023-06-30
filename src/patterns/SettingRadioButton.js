import { View , Text} from "react-native"
import { RadioButton } from "react-native-paper"
import { colors } from "../styles/colors"
import { Dimencoes } from "../styles/dimencoes"
const SettingRadioButton = ({text}) => {
    return(      
      <View
      style={{
        flexDirection: "row",
        backgroundColor: colors.blur.primary,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 17,
        height: 70,
        margin: 7,
        borderRadius: Dimencoes.borderRadius

      }}
    >
      <View> 
          <Text style={{ 
              color: colors.complement.tertiary,
              fontSize: Dimencoes.fontSize,
          }}> 
          {text}
          </Text>
      </View>
      <View>
        <RadioButton
          status="checked"
          color={colors.primary}
        />
      </View>
    </View>
    )
}
export default SettingRadioButton