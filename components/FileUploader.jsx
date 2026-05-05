// import React, { useState }from 'react'
// import { TouchableOpacity } from 'react-native'
// import { StyleSheet, Text, View, Alert, Platform} from 'react-native'

// import * as FileSystem from 'expo-file-system'
// import * as DocumentPicker from 'expo-document-picker';

// import FontAwesome from '@expo/vector-icons/FontAwesome';

// export default function FileUploader () {

//     const uploadFile = async () => {
//         try {
//             const result = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true});
//             if(!result.canceled) {
//                 const {uri} = result.assets[0];
//                 const file = new File(uri);
//                 file.create()
//                 console.log(file.textSync());
//             }
//         } catch (error){
//             console.error(error);
//         }
//     }

//     return (
//         <TouchableOpacity
//             style={{
//                 backgroundColor: '#3b5998',
//                 padding: 10,
//                 borderRadius: 5,
//                 flexDirection: 'row',
//                 alignItems: 'center'
//             }}
//             onPress={() => uploadFile()}
//         >
//             <FontAwesome name="upload" size={20} color="white" />
//             <Text style={{ color: 'white', marginLeft: 10 }}>
//                 Upload a csv file
//             </Text>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     btnClickContainer: {
//         justifyContent: 'center',
//         borderRadius: 5,
//         padding: 5,
//     }
// })