
import  {StyleSheet} from "react-native"

import { colors } from "../../utils/colors";


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        //backgroundColor: '#FCA34D',
        paddingVertical: 18,
        paddingHorizontal: 12,
        //padding: 8,
        //margin: 68,
        borderRadius: 10,
        width:'100%'
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

export default styles