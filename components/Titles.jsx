import { StyleSheet, Text, View} from 'react-native'
import { verticalScale } from 'react-native-size-matters'

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Titles({title}){
    return(
        <Text style={styles.header}> {title} </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '80%',
        marginTop: 15,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        alignContent: 'center',
        alignSelf: 'center',
    }
})