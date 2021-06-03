import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from '../../../core/constants'
import { screenOptions } from '../../shared'

import FavoritesScreen from '../../../screens/Favorites'
import PostScreen from '../../../screens/Post'

const Favorites = createStackNavigator()

const screens: IScreen = {
   [Screen.Favorites]: FavoritesScreen,
   [Screen.Post]: PostScreen
}

export const FavoritesNavigator: FC = () => (
   <Favorites.Navigator screenOptions={screenOptions}>
      {Object.entries(screens).map(([name, component]) => (
         <Favorites.Screen key={name} name={name} component={component} />
      ))}
   </Favorites.Navigator>
)