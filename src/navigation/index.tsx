import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigator } from './Navigators/Root'

const Navigation: FC = () => (
   <NavigationContainer>
      <RootNavigator />
   </NavigationContainer>
)

export default Navigation