import React, { FC, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderIcon from '../components/HeaderIcon'

/* types */
import { ParamListBase } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

interface Props {
   navigation: DrawerNavigationProp<ParamListBase>
}

export const CreationScreen: FC<Props> = ({ navigation }) => {
   useEffect(() => {
      navigation.setOptions({
         headerTitle: 'Create new post',
         headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
               <Item
                  title="drawer"
                  iconName="ios-menu"
                  onPress={navigation.toggleDrawer}
               />
            </HeaderButtons>
         )
      })
   }, [])

   return (
      <View style={styles.container}>
         <Text>Creation screen</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      padding: 10
   }
})

export default CreationScreen