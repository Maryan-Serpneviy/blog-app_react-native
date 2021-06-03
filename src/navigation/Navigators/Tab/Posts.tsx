import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from '../../../core/constants'
import { screenOptions } from '../../shared'

import DashboardScreen from '../../../screens/Dashboard'
import PostScreen from '../../../screens/Post'

const Posts = createStackNavigator()

const screens: IScreen = {
   [Screen.Dashboard]: DashboardScreen,
   [Screen.Post]: PostScreen
}

export const PostsNavigator: FC = () => (
   <Posts.Navigator initialRouteName={Screen.Dashboard} screenOptions={screenOptions}>
      {Object.entries(screens).map(([name, component]) => (
         <Posts.Screen key={name} name={name} component={component} />
      ))}
   </Posts.Navigator>
)