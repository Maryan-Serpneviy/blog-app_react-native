import React, { FC } from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../styles/theme'

export const HeaderIcon: FC = props => (
   <HeaderButton
      {...props}
      title=""
      iconSize={24}
      color={Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR}
      IconComponent={Ionicons}
   />
)

export default HeaderIcon