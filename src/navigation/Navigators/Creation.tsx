import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from '../../core/constants'
import { screenOptions } from '../shared'

import CreationScreen from '../../screens/Creation'

const Creation = createStackNavigator()

export const CreationNavigator: FC = () => (
   <Creation.Navigator screenOptions={screenOptions}>
      <Creation.Screen name={Screen.Creation} component={CreationScreen} />
   </Creation.Navigator>
)