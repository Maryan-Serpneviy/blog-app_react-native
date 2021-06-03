import React, { FC, useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

/* store */
import { observer } from 'mobx-react'
import { postsStore as store } from '../store/posts.store'

/* components */
import HeaderIcon from '../components/HeaderIcon'
import PostList from '../components/PostList'

/* constants */
import { Screen } from '../core/constants'

/* types */
import { ParamListBase } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

interface Props {
   navigation: DrawerNavigationProp<ParamListBase>
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
                  onPress={navigation.toggleDrawer}
               />
            </HeaderButtons>
         )
      })
   }, [])

   return <PostList posts={store.favPosts} onOpen={openPostHandler} />
}

export default observer(FavoritesScreen)