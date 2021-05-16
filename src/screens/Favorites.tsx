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

export const FavoritesScreen: FC<Props> = ({ navigation }) => {
   const openPostHandler = (post: IPost) => {
      navigation.navigate(Screen.Post, { post })
   }

   useEffect(() => {
      navigation.setOptions({
         headerTitle: 'Favorites',
         headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title="drawer"
                  iconName="ios-menu"
               />
            </HeaderButtons>
         )
      })
   }, [])

   const posts = dataService.posts.filter(post => post.booked)

   return <PostList posts={posts} onOpen={openPostHandler} />
}

export default FavoritesScreen