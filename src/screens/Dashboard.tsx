import React, { FC, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

/* services */
import { dataService } from '../services/data.service'

/* components */
import HeaderIcon from '../components/HeaderIcon'
import PostList from '../components/PostList'

/* constants */
import { Screen } from '../core/constants'

/* types */
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'

interface Props {
   navigation: StackNavigationProp<ParamListBase>
}

export const DashboardScreen: FC<Props> = ({ navigation }) => {
   const openPostHandler = (post: IPost) => {
      navigation.navigate(Screen.Post, { post })
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
               />
            </HeaderButtons>
         )
      })
   }, [])

   return <PostList posts={dataService.posts} onOpen={openPostHandler} />
}

export default DashboardScreen