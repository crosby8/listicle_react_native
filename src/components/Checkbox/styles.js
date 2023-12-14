
import  {StyleSheet} from "react-native"

import { colors } from "../../utils/colors";


const styles = StyleSheet.create({
    container: {
       borderColor: colors.blue,
       borderWidth: 1,
       borderRadius: 4,
       width: 22,
       height: 22,
       flexDirection: 'row',
    },
    innerContainer: {
        backgroundColor: colors.blue,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    checked: {
        width: 12,
        height: 12,

    },
    //title: {
    //    color: colors.white,
    //    textAlign: 'center',
    //    fontSize: 16,
    //    fontWeight: 'bold',
    //},

})

export default styles