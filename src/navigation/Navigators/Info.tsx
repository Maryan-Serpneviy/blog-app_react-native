import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from '../../core/constants'
import { screenOptions } from '../shared'

import InfoScreen from '../../screens/Info'

const Info = createStackNavigator()

export const InfoNavigator: FC = () => (
   <Info.Navigator screenOptions={screenOptions}>
      <Info.Screen name={Screen.Info} component={InfoScreen} />
   </Info.Navigator>
)