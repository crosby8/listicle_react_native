import  { StyleSheet } from "react-native"
import { colors } from "../../utils/colors"


const styles = StyleSheet.create({
    container: {
        //marginHorizontal: 24,
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    inputView:{
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems:'center',

    },
    input: {
        paddingHorizontal:16,
        //borderWidth: 1,
        paddingVertical: 16,
        flex:1,

    },
    eyeIcon: {
        //borderWidth:3,
        height: 24,
        width: 24,
        marginHorizontal:16,
        
    },
})

export default styles