import React, { FC, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

/* services */
import { dataService } from '../services/data.service'

/* components */
import Post from '../components/Post'
import HeaderIcon from '../components/HeaderIcon'

/* styles */
import commonStyles from '../styles/common'

/* types */
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'

interface Props {
   navigation: StackNavigationProp<ParamListBase>
}

export const DashboardScreen: FC<Props> = ({ navigation }) => {
   const openPost = (post: IPost) => {
      navigation.navigate(ScreenEnum.Post, { post })
   }

   useEffect(() => {
      navigation.setOptions({
         headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title="drawer"
                  iconName="ios-menu"
               />
            </HeaderButtons>
         ),
         headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title="camera"
                  iconName="ios-camera"
                  onPress={() => {}}
               />
            </HeaderButtons>
         )
      })
   }, [])

   return (
      <View style={[commonStyles.center, styles.container]}> 
         <FlatList
            data={dataService.posts}
            keyExtractor={post => String(post.id)}
            renderItem={({ item }) => <Post post={item} onOpen={openPost} />}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   }
})

export default DashboardScreen