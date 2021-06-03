import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

/* navigators */
import { TabNavigator } from './Tab'
import { CreationNavigator } from './Creation'
import { InfoNavigator } from './Info'

/* constants */
import { THEME } from '../../styles/theme'
import { Navigator } from '../shared'

const Drawer = createDrawerNavigator()

const drawerNavigatorOptions = {
   activeTintColor: THEME.MAIN_COLOR,
   labelStyle: {
      fontFamily: 'khand',
      fontSize: 24
   }
}

const navigators: IScreen = {
   [Navigator.Tabs]: TabNavigator,
   [Navigator.Creation]: CreationNavigator,
   [Navigator.Info]: InfoNavigator
}

const navigatorOptions = {
   [Navigator.Tabs]: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <Ionicons name="book-outline" size={26} />
   },
   [Navigator.Creation]: {
      drawerLabel: 'Create post',
      drawerIcon: () => <Ionicons name="create-outline" size={26} />
   },
   [Navigator.Info]: {
      drawerLabel: 'App info',
      drawerIcon: () => <Ionicons name="help-circle-outline" size={26} />
   }
}

export const RootNavigator: FC = () => (
   <Drawer.Navigator drawerContentOptions={drawerNavigatorOptions}>
      {Object.entries(navigators).map(([name, component]) => (
         <Drawer.Screen key={name} name={name} component={component} options={navigatorOptions[name]} />
      ))}
   </Drawer.Navigator>
)