import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";


const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        //borderWidth: 1,
    },
    image:{
        height: 200,
        width: '100%',
       
    },
    innerContainer:{
        marginVertical: 54,
    },
    title:{
        textAlign: 'center',
        fontSize: 40,
        color: colors.black,
        fontWeight: 'bold',
    },
    innertitle:{
        fontSize: 40,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: colors.orange,
        color: '#FCA34D',
    },
    footerText: {
        textAlign: 'center',
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 24,
    },
})

export default styles
