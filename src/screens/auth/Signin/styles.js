import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
//const { height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container:{
        padding: 24,
        //borderWidth:3,
    },
    agree: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textAgree:{
        color: colors.blue,
        marginHorizontal: 14,
    },
    textAgreeBold:{
        fontWeight: 'bold',  
    },
    register :{
        marginVertical: 20,
    },
    footerText: {
        color: colors.blue,
        marginBottom: 50,
        textAlign: 'center',
    },
    footerTextLogin: {
        fontWeight: 'bold',  

    },
})


export default styles;