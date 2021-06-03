import { Platform } from 'react-native'
import { THEME } from '../styles/theme'

export enum Navigator {
   Tabs = 'Tabs Navigator',
   Posts = 'Posts Navigator',
   Favorites = 'Favorites Navigator',
   Creation = 'Create Navigator',
   Info = 'Info Navigator'
}

export const screenOptions = {
   headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
   },
   headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
}