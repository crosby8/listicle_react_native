

import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";


const styles = StyleSheet.create({
    container:{
        //padding: 24,
        marginBottom: 54,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-around'
    },
    authBackIcon: {
        height: 18,
        width: 18,
        
    },
    title: {
        fontSize: 26,
        color: colors.blue, 
        fontWeight: 'bold',
        paddingHorizontal:16, 
        
    }
})

export default styles;