
import  {StyleSheet} from "react-native"

import { colors } from "../../utils/colors";


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        //backgroundColor: '#FCA34D',
       
        //margin: 68,
        borderRadius: 14,
        width:'40%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        marginBottom: 32,
    },
   
    googleImage:{
        width: 30,
        height: 30,
    }
})

export default styles