/* This will be the section that focuses on importing stuff from Expo, React, and React Native */
import { StyleSheet, Text, View} from 'react-native'

/* This will be the section that focuses on importing stuff that are images,videos, icons, etc. (Stuff that isnt components). */
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