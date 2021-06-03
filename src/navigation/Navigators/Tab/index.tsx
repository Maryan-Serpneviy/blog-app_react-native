import React, { FC } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

/* navigators */
import { PostsNavigator } from './Posts'
import { FavoritesNavigator } from './Favorites'

/* constants */
import { Screen } from '../../../core/constants'
import { THEME } from '../../../styles/theme'
import { Navigator } from '../../shared'

const Tab = Platform.OS == 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const tabNavigatorOptions = {
   shifting: true,
   barStyle: {
      backgroundColor: Platform.OS == 'android' ? THEME.MAIN_COLOR : 'white'
   },
   tabBarOptions: {
      activeTintColor: Platform.OS == 'android' ? 'white' : THEME.MAIN_COLOR
   }
}

export const TabNavigator: FC = () => (
   <Tab.Navigator {...tabNavigatorOptions}>
      <Tab.Screen
         name={Navigator.Posts}
         component={PostsNavigator}
         options={{
            title: Screen.Dashboard,
            tabBarIcon: (props: { color: string }) => (
               <Ionicons
                  name="ios-albums"
                  size={25}
                  color={props.color}
               />
            )
         }}
      />
      <Tab.Screen
         name={Navigator.Favorites}
         component={FavoritesNavigator}
         options={{
            title: Screen.Favorites,
            tabBarIcon: (props: { color: string }) => (
               <Ionicons
                  name="ios-star"
                  size={25}
                  color={props.color}
               />
            )
         }}
      />
   </Tab.Navigator>
)