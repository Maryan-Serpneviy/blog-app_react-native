import React, { FC } from 'react'
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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

const Post = createStackNavigator()
const Favorites = createStackNavigator()
const Tab = createBottomTabNavigator()

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
      <Tab.Navigator>
         <Tab.Screen
            name="PostNavigator"
            component={PostNavigator}
         />
         <Tab.Screen
            name="FavoritesNavigator"
            component={FavoritesNavigator}
         />
      </Tab.Navigator>
   </NavigationContainer>
)

export default RootNavigator