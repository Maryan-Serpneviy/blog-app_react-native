import React, { FC, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderIcon from '../components/HeaderIcon'

import commonStyles from '../styles/common'

/* types */
import { ParamListBase } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

interface Props {
   navigation: DrawerNavigationProp<ParamListBase>
}

export const InfoScreen: FC<Props> = ({ navigation }) => {
   useEffect(() => {
      navigation.setOptions({
         headerTitle: 'App info',
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
      <View style={[commonStyles.center]}>
         <Text>Version <Text style={styles.version}>1.0.0</Text></Text>
      </View>
   )
}

const styles = StyleSheet.create({
   version: {
      fontFamily: 'caviar-dreams_bold'
   }
})

export default InfoScreen