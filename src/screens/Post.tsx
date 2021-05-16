import React, { FC, useEffect } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, Button, Alert } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'

/* services */
import { dataService } from '../services/data.service'

/* components */
import HeaderIcon from '../components/HeaderIcon'

/* constants */
import { THEME } from '../styles/theme'
import { Screen } from '../core/constants'

/* types */
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, ParamListBase } from '@react-navigation/native'

interface Props {
   route: RouteProp<{ [Screen.Post]: { post: IPost }}, Screen.Post> 
   navigation: StackNavigationProp<ParamListBase>
}

export const PostScreen: FC<Props> = ({ route, navigation }) => {
   const { post } = route.params
   const currentPost = dataService.posts.find(item => item.id === post.id)

   const iconName = post.booked ? 'ios-star' : 'ios-star-outline'

   useEffect(() => {
      navigation.setOptions({
         title: `Post from ${new Date(post.date).toLocaleDateString()}`,
         headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title=""
                  iconName={iconName}

               />
            </HeaderButtons>
         )
      })
   }, [])

   const removeHandler = () => {
      Alert.alert(
         'Confirm delete',
         'Are you sure you want to proceed',
         [
            {
               text: 'Cancel',
               style: 'cancel',
               onPress: () => {}
            },
            {
               text: 'Delete',
               style: 'destructive',
               onPress: () => {}
            }
         ],
         { cancelable: false }
      )
   }

   return (
      <ScrollView>
         <Image source={{ uri: currentPost?.img }} style={styles.image} />
         <View style={styles.textWrap}>
            <Text style={styles.text}>{ currentPost?.text.repeat(20) }</Text>
         </View>
         <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   image: {
      width: '100%',
      height: 300
   },
   textWrap: {
      padding: 10
   },
   text: {
      fontFamily: 'khand',
      fontSize: 22
   }
})

export default PostScreen