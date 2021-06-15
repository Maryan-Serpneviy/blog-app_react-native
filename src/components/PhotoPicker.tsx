import React, { FC, useState } from 'react'
import { StyleSheet, Alert, View, TouchableOpacity, Text, Image } from 'react-native'

import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../styles/theme'

interface Props {
   onPick: (uri: string) => void
}

const PhotoPicker: FC<Props> = ({ onPick }) => {
   const [imagePickerResult, setImagePickerResult] = useState<string | null>(null)

   const askPermission = async (): Promise<boolean> => {
      const { status } = await Permissions.askAsync(
         Permissions.CAMERA,
         Permissions.MEDIA_LIBRARY
      )
      if (status !== 'granted') {
         Alert.alert('Permission must be granted to upload a photo')
         return false
      }
      return true
   }

   const takePhoto = async () => {
      const permissionGranted = await askPermission()
      if (!permissionGranted) return

      const photo = await ImagePicker.launchCameraAsync({
         quality: 0.7,
         allowsEditing: false,
         aspect: [16, 9]
      }) as IImagePickerResult

      setImagePickerResult(photo.uri)
      onPick(photo.uri)
   }

   const uploadImage = async () => {
      const permissionGranted = await askPermission()
      if (!permissionGranted) return

      const image = await ImagePicker.launchImageLibraryAsync({
         quality: 0.7,
         allowsEditing: false,
         aspect: [16, 9]
      }) as IImagePickerResult

      setImagePickerResult(image.uri)
      onPick(image.uri)
   }

   return (
      <View style={styles.container}>
         <View style={styles.buttons}>
            <TouchableOpacity style={styles.photoBtn} onPress={takePhoto}>
               <Ionicons
                  name="ios-camera"
                  size={22}
                  color="white"
                  style={{ paddingHorizontal: 10 }}
               />
               <Text style={styles.photoBtnText}>Take a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadBtn} onPress={uploadImage}>
               <Ionicons
                  name="images-outline"
                  size={22}
                  color="white"
                  style={{ paddingHorizontal: 10 }}
               />
               <Text style={styles.uploadBtnText}>Upload from library</Text>
            </TouchableOpacity>
         </View>

         {imagePickerResult && <Image style={styles.image} source={{ uri: imagePickerResult }} />}
      </View>
   )
} 

const styles = StyleSheet.create({
   container: {
      marginBottom: 10
   },
   buttons: {
      flexDirection: 'row',
      height: 35
   },
   photoBtn: {
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: THEME.BUTTON_PRIMARY,
      marginRight: 5
   },
   uploadBtn: {
      flexGrow: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: THEME.BUTTON_SECONDARY,
      marginLeft: 5
   },
   photoBtnText: {
      color: 'white',
      fontFamily: 'caviar-dreams_bold',
      textTransform: 'uppercase'
   },
   uploadBtnText: {
      color: 'white',
      fontFamily: 'caviar-dreams_bold',
      textTransform: 'uppercase'
   },
   image: {
      width: '100%',
      height: 200,
      marginTop: 10
   }
})

export default PhotoPicker