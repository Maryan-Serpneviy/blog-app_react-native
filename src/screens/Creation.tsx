import React, { FC, useState, useEffect } from 'react'
import {
   StyleSheet,
   ScrollView,
   View,
   TouchableWithoutFeedback,
   Text,
   TextInput,
   Button,
   Keyboard
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

/* store */
import { observer } from 'mobx-react'
import { postsStore as store } from '../store/posts.store'

/* components */
import PhotoPicker from '../components/PhotoPicker'
import HeaderIcon from '../components/HeaderIcon'

/* constants */
import { Screen } from '../core/constants'
import { THEME } from '../styles/theme'

/* types */
import { ParamListBase } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

interface Props {
   navigation: DrawerNavigationProp<ParamListBase>
}

export const CreationScreen: FC<Props> = ({ navigation }) => {
   const [postText, setPostText] = useState<string>('')
   const [imageUri, setImageUri] = useState<string>('')

   useEffect(() => {
      navigation.setOptions({
         headerTitle: 'Create',
         headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title="drawer"
                  iconName="ios-menu"
                  onPress={navigation.toggleDrawer}
               />
            </HeaderButtons>
         )
      })
   }, [])

   const createPost = () => {
      const newPost: IPost = {
         id: store.allPosts.length + 1,
         date: new Date().toJSON(),
         text: postText,
         image: imageUri || '',
         booked: false
      }
      store.createPost(newPost)
      navigation.navigate(Screen.Dashboard)
   }

   const onImagePick = (uri: string) => {
      setImageUri(uri)
   }

   return (
      <ScrollView>
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style={styles.container}>
            <Text style={styles.pageTitle}>Create new post</Text>
            <TextInput
               style={styles.input}
               placeholder="Enter post title"
               value={postText}
               onChangeText={setPostText}
               multiline
            />

            <PhotoPicker onPick={onImagePick} />

            <Button
               title="Create post"
               color={THEME.MAIN_COLOR}
               onPress={createPost}
               disabled={!postText || !imageUri}
            />
         </View>
         </TouchableWithoutFeedback>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   },
   pageTitle: {
      marginVertical: 10,
      fontSize: 20,
      textAlign: 'center',
      fontFamily: 'caviar-dreams_bold'
   },
   input: {
      marginBottom: 10,
      padding: 10
   }
})

export default observer(CreationScreen)