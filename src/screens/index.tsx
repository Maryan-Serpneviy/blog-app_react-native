import React, { FC } from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

/* constants */
import { Screen } from '../core/constants'
import { THEME } from '../styles/theme'

/* screens */
import DashboardScreen from '../screens/Dashboard'
import CreationScreen from '../screens/Creation'
import FavoritesScreen from '../screens/Favorites'
import InfoScreen from '../screens/Info'
import PostScreen from '../screens/Post'

const postScreens: IScreen = {
   [Screen.Dashboard]: DashboardScreen,
   [Screen.Post]: PostScreen
}

const favoritesScreens: IScreen = {
   [Screen.Favorites]: FavoritesScreen,
   [Screen.Post]: PostScreen
}

const screenOptions = {
   headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
   },
   headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
}

const tabNavigatorOptions = {
   shifting: true,
   barStyle: {
      backgroundColor: Platform.OS == 'android' ? THEME.MAIN_COLOR : 'white'
   },
   tabBarOptions: {
      activeTintColor: Platform.OS == 'android' ? 'white' : THEME.MAIN_COLOR
   }
}

const Post = createStackNavigator()
const Favorites = createStackNavigator()
const Tab = Platform.OS == 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const PostNavigator: FC = () => (
   <Post.Navigator initialRouteName={Screen.Dashboard} screenOptions={screenOptions}>
      {Object.entries(postScreens).map(([name, component]) => (
         <Post.Screen key={name} name={name} component={component} />
      ))}
   </Post.Navigator>
)

const FavoritesNavigator: FC = () => (
   <Favorites.Navigator initialRouteName={Screen.Favorites} screenOptions={screenOptions}>
      {Object.entries(favoritesScreens).map(([name, component]) => (
         <Favorites.Screen key={name} name={name} component={component} />
      ))}
   </Favorites.Navigator>
)

export const RootNavigator: FC = () => (
   <NavigationContainer>
      <Tab.Navigator {...tabNavigatorOptions}>
         <Tab.Screen
            name="Posts"
            component={PostNavigator}
            options={{
               tabBarIcon: (props: { color: string }) => <Ionicons name="ios-albums" size={25} color={props.color} />
            }}
         />
         <Tab.Screen
            name="Favorites"
            component={FavoritesNavigator}
            options={{
               tabBarIcon: (props: { color: string }) => <Ionicons name="ios-star" size={25} color={props.color} />
            }}
         />
      </Tab.Navigator>
   </NavigationContainer>
)

export default RootNavigator